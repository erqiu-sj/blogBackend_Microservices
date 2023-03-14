/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 09:22:53
 * @LastEditTime: 2023-03-14 22:39:34
 * @Description:
 * @FilePath: /backend/packages/main/src/member/member.controller.ts
 */
import { Controller, Post, Body, Delete } from '@nestjs/common'
import { MemberService } from './member.service'
import { Member } from '@blog/bootstrap'
import { int } from '@memo28/types'

@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Post('/createUser')
  createUser(@Body() body: Member) {
    const result = this.memberService.createUser(body)
    return result
  }

  @Delete('/delUser')
  deleteUser(@Body() body: { id: string }) {
    const result = this.memberService.deleteUser(Number(body.id))
    return result
  }
}
