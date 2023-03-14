/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 23:12:38
 * @LastEditTime: 2023-03-14 22:23:45
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/exceptional/exceptional.filter.ts
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { RpcException, BaseRpcExceptionFilter } from '@nestjs/microservices'
import { Observable, of } from 'rxjs'
import { Response } from 'express'
import { ResType } from './types'
import { int, str } from '@memo28/types'

@Catch()
export class ExceptionalFilter implements ExceptionFilter {
  catch(exception: RpcException & HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    response.status(500).json({
      status: 500,
      msg: exception.message,
      stack: exception.stack,
    } as ResType)
  }
}

export class OwnRpcException extends RpcException {
  private code: int
  private userMsg: str
  constructor(code: int, userMsg: str, msg: str) {
    super(msg)
    this.code = code
    this.userMsg = userMsg
  }
  getCause() {
    return {
      status: this.code,
      userMsg: this.userMsg,
      msg: this.message,
    } as ResType
  }
}

@Catch()
export class ExceptionalFilterForRpc implements BaseRpcExceptionFilter<OwnRpcException> {
  handleUnknownError(exception: OwnRpcException, status: string): Observable<never> {
    return
  }
  isError(exception: any): exception is Error {
    console.log(exception, 'exception')
    return exception
  }
  catch(exception: OwnRpcException, host: ArgumentsHost): Observable<ResType> {
    const ctx = host.switchToRpc()
    const context = ctx.getContext()
    // 报错的服务
    const errorServiceName = context.args[context.args.length - 1]
    return of({
      status: 500,
      msg: exception.message,
      stack: `${errorServiceName} => ${JSON.stringify(ctx.getData())}`,
    } as ResType)
  }
}
