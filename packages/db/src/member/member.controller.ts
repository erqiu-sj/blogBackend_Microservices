/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:44:10
 * @LastEditTime: 2023-03-14 23:23:47
 * @Description:
 * @FilePath: /backend/packages/db/src/member/member.controller.ts
 */
import { DBRpcConstans, ExceptionalFilterForRpc, ResType } from '@blog/bootstrap'
import { int } from '@memo28/types'
import { Controller, UseFilters } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { Member } from '@prisma/client'
import { CreateUserService } from './createUser.service'
import { DeleteUserService } from './deleteUser.service'
import { MemberService } from './member.service'

@UseFilters(new ExceptionalFilterForRpc())
@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService, private CreateUserService: CreateUserService, private deleteUserService: DeleteUserService) {}

  @MessagePattern(DBRpcConstans.member.createUser)
  async createUser(opt: Member): Promise<ResType<unknown>> {
    return (await this.CreateUserService.setUserOpt(opt).createUserLog().createUser()).getResult()
  }

  @MessagePattern(DBRpcConstans.member.deleteUser)
  async deleteUser(opt: { id: int }): Promise<ResType<unknown>> {
    return (await this.deleteUserService.setDeleteId(opt.id).deleteUserLog().deleteUser()).getResult()
  }
}
