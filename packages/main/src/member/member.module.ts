/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 09:22:56
 * @LastEditTime: 2023-03-14 13:53:11
 * @Description:
 * @FilePath: /backend/packages/main/src/member/member.module.ts
 */
import { Module } from '@nestjs/common'
import { MemberController } from './member.controller'
import { MemberService } from './member.service'

@Module({
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
