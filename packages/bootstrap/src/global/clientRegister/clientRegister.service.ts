/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 10:18:17
 * @LastEditTime: 2023-03-14 15:56:59
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/clientRegister/clientRegister.service.ts
 */
import { Injectable, Inject } from '@nestjs/common'
import { logsClientName, LogEventPattern, logsInfoType, logsNameTypes } from '../../config/logs'
import { articleClientName } from '../../config/article'
import { memberClientName } from '../../config/member'
import { dbClientName } from '../../config/db'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'
import { obj } from '@memo28/types'

@Injectable()
export class ClientRegisterService {
  @Inject(logsClientName)
  private logs: ClientProxy

  @Inject(articleClientName)
  private article: ClientProxy

  @Inject(memberClientName)
  private member: ClientProxy

  @Inject(dbClientName)
  private db: ClientProxy

  private logsName: logsNameTypes = 'article'

  setLogsName(name: logsNameTypes) {
    this.logsName = name
    return this
  }

  triggerLogs(info: logsInfoType) {
    this.logs.emit(LogEventPattern, {
      name: this.logsName,
      ...info,
    } as logsInfoType)
  }

  triggerMember<T = any>(type: string, args: obj): Observable<T> {
    return this.member.send(type, args)
  }

  triggerArticle(type: string): Observable<any> {
    return this.article.emit(type, {})
  }

  triggerDb<T = any>(type: string, args: obj): Observable<T> {
    return this.db.send(type, args)
  }
}
