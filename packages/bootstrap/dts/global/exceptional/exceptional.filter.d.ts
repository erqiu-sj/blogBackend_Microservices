import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { RpcException, BaseRpcExceptionFilter } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ResType } from './types';
import { int, str } from '@memo28/types';
export declare class ExceptionalFilter implements ExceptionFilter {
    catch(exception: RpcException & HttpException, host: ArgumentsHost): void;
}
export declare class OwnRpcException extends RpcException {
    private code;
    private userMsg;
    constructor(code: int, userMsg: str, msg: str);
    getCause(): ResType<unknown>;
}
export declare class ExceptionalFilterForRpc implements BaseRpcExceptionFilter<OwnRpcException> {
    handleUnknownError(exception: OwnRpcException, status: string): Observable<never>;
    isError(exception: any): exception is Error;
    catch(exception: OwnRpcException, host: ArgumentsHost): Observable<ResType>;
}
