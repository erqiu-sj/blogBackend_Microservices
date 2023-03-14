/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 09:11:21
 * @LastEditTime: 2023-03-13 09:11:22
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/config/article.ts
 */

import { Transport, ClientsModuleOptions } from '@nestjs/microservices'
import { appClientPorts } from '../config'

export const articleClientName = 'article_service'

export const articleClientOpts: ClientsModuleOptions[number] = {
  name: articleClientName,
  transport: Transport.TCP,
  options: {
    port: appClientPorts.article,
  },
}
