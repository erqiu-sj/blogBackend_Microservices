/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:37:50
 * @LastEditTime: 2023-03-14 22:36:55
 * @Description:
 * @FilePath: /backend/packages/member/src/member.controller.ts
 */
import { Member, MemberRpcConstans } from '@blog/bootstrap'
import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { MemberService } from './member.service'
import { int } from '@memo28/types'

@Controller()
export class MemberController {
  constructor(private memberService: MemberService) {}

  @MessagePattern(MemberRpcConstans.db.createUser)
  createUser(opt: Member) {
    const result = this.memberService.createuser(opt)
    return result
  }

  @MessagePattern(MemberRpcConstans.db.deleteUser)
  deleteUser(opt: { id: int }) {
    return this.memberService.deleteUser(opt.id)
  }
}
