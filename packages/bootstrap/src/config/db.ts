/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:36:56
 * @LastEditTime: 2023-03-14 10:36:57
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/config/db.ts
 */

import { Transport, ClientsModuleOptions } from '@nestjs/microservices'
import { appClientPorts } from '../config'

export const dbClientName = 'db_service'

export const dbClientOpts: ClientsModuleOptions[number] = {
  name: dbClientName,
  transport: Transport.TCP,
  options: {
    port: appClientPorts.db,
  },
}
