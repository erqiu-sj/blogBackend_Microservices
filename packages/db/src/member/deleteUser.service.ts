/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 23:13:00
 * @LastEditTime: 2023-03-14 23:22:08
 * @Description:
 * @FilePath: /backend/packages/db/src/member/deleteUser.service.ts
 */
import { int } from '@memo28/types'
import { Injectable } from '@nestjs/common'
import { ClientRegisterService, DbService, Member, OwnRpcException, ResType } from '@blog/bootstrap'

@Injectable()
export class DeleteUserService {
  deleteId: int
  constructor(private DbService: DbService, private clientRegisterService: ClientRegisterService) {}
  setDeleteId(id: int) {
    this.deleteId = id
    return this
  }
  deleteUserLog() {
    this.clientRegisterService.triggerLogs({
      name: 'db',
      level: 'warn',
      obj: {
        payload: this.deleteId,
      },
      message: 'ready delete user!',
    })
    return this
  }

  async deleteUser(): Promise<this> {
    await this.DbService.member
      .delete({
        where: {
          id: this.deleteId,
        },
      })
      .catch(e => {
        throw new OwnRpcException(500, '删除用户失败', e)
      })
    return this
  }

  getResult(): ResType {
    return { status: 200, msg: 'ok', data: {} }
  }
}
