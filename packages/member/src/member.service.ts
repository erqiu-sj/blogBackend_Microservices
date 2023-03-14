/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:37:54
 * @LastEditTime: 2023-03-14 22:28:12
 * @Description:
 * @FilePath: /backend/packages/member/src/member.service.ts
 */
import { Injectable } from '@nestjs/common'
import { ClientRegisterService, DBRpcConstans, Member } from '@blog/bootstrap'
import { Observable } from 'rxjs'
import { int } from '@memo28/types'

@Injectable()
export class MemberService {
  constructor(private clientRegisterService: ClientRegisterService) {}

  createuser(opt: Member): Observable<any> {
    this.clientRegisterService.triggerLogs({
      name: 'member',
      level: 'info',
      obj: {
        req: opt,
      },
      message: 'ready create',
    })
    const result = this.clientRegisterService.triggerDb(DBRpcConstans.member.createUser, opt)
    return result
  }

  deleteUser(id: int) {
    return this.clientRegisterService.triggerDb(DBRpcConstans.member.deleteUser, { id })
  }
}
