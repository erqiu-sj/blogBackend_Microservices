/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:44:09
 * @LastEditTime: 2023-03-14 23:22:33
 * @Description:
 * @FilePath: /backend/packages/db/src/member/member.module.ts
 */
import { ClientRegisterModule, DbModule } from '@blog/bootstrap'
import { Module } from '@nestjs/common'
import { CreateUserService } from './createUser.service'
import { MemberController } from './member.controller'
import { MemberService } from './member.service'
import { DeleteUserService } from './deleteUser.service'

@Module({
  imports: [DbModule, ClientRegisterModule],
  controllers: [MemberController],
  providers: [MemberService, CreateUserService, DeleteUserService],
})
export class MemberModule {}
