/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 09:12:22
 * @LastEditTime: 2023-03-13 09:12:23
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/config/member.ts
 */
import { appClientPorts } from '../config'
import { Transport, ClientsModuleOptions } from '@nestjs/microservices'

export const memberClientName = 'member_service'

export const memberClientOpts: ClientsModuleOptions[number] = {
  name: memberClientName,
  transport: Transport.TCP,
  options: {
    port: appClientPorts.member,
  },
}
