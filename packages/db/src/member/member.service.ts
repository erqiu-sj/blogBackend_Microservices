/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:44:11
 * @LastEditTime: 2023-03-14 23:13:39
 * @Description:
 * @FilePath: /backend/packages/db/src/member/member.service.ts
 */
import { ClientRegisterService, DbService, OwnRpcException, logsInfoType } from '@blog/bootstrap'
import { Injectable } from '@nestjs/common'
import { Member } from '@prisma/client'
import { int } from '@memo28/types'

@Injectable()
export class MemberService {
  constructor(private DbService: DbService, private clientRegisterService: ClientRegisterService) {}

  async deleteUser(id: int) {
    const result = await this.DbService.member.delete({
      where: {
        id,
      },
    })
    return result
  }
}
