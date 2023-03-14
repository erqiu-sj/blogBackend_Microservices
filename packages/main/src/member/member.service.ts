/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 09:22:55
 * @LastEditTime: 2023-03-14 22:30:54
 * @Description:
 * @FilePath: /backend/packages/main/src/member/member.service.ts
 */
import { Injectable } from '@nestjs/common'
import { ClientRegisterService, Member, MemberRpcConstans } from '@blog/bootstrap'
import { int } from '@memo28/types'

@Injectable()
export class MemberService {
  constructor(private clientRegisterService: ClientRegisterService) {}

  createUser(opt: Member) {
    return this.clientRegisterService.triggerMember(MemberRpcConstans.db.createUser, opt)
  }

  deleteUser(id: int) {
    return this.clientRegisterService.triggerMember(MemberRpcConstans.db.deleteUser, { id })
  }
}
