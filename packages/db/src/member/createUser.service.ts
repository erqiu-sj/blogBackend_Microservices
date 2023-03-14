/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 22:45:27
 * @LastEditTime: 2023-03-14 23:11:51
 * @Description:
 * @FilePath: /backend/packages/db/src/member/createUser.service.ts
 */
import { ClientRegisterService, DbService, Member, OwnRpcException, ResType } from '@blog/bootstrap'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUserService {
  private userOpt: Member
  constructor(private DbService: DbService, private clientRegisterService: ClientRegisterService) {}

  setUserOpt(userOpt: Member) {
    this.userOpt = userOpt
    return this
  }

  createUserLog(): this {
    this.clientRegisterService.triggerLogs({
      name: 'db',
      level: 'info',
      obj: {
        payload: JSON.stringify(this.userOpt),
      },
      message: 'createUserLog',
    })
    return this
  }

  async createUser(): Promise<this> {
    await this.DbService.member
      .create({
        data: {
          ...this.userOpt,
        },
      })
      .catch(e => {
        throw new OwnRpcException(500, '创建用户失败', e)
      })
    return this
  }

  getResult(): ResType {
    return { status: 200, msg: '0k', data: [] }
  }
}
