/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:26:40
 * @LastEditTime: 2023-03-14 16:31:28
 * @Description:
 * @FilePath: /backend/packages/main/src/main.module.ts
 */
import { AuthModule, ClientRegisterModule } from '@blog/bootstrap'
import { Module } from '@nestjs/common'
import { MainController } from './main.controller'
import { MainService } from './main.service'
import { MemberController } from './member/member.controller'
import { MemberModule } from './member/member.module'
import { MemberService } from './member/member.service'

@Module({
  imports: [ClientRegisterModule, AuthModule, MemberModule],
  providers: [MainService, MemberService],
  controllers: [MainController, MemberController],
})
export class MainModule {}
