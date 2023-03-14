/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:38:28
 * @LastEditTime: 2023-03-14 11:42:50
 * @Description:
 * @FilePath: /backend/packages/member/src/member.module.ts
 */
import { Module } from '@nestjs/common'
import { ClientRegisterModule } from '@blog/bootstrap'
import { MemberController } from './member.controller'
import { MemberService } from './member.service'

@Module({
  imports: [ClientRegisterModule],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
