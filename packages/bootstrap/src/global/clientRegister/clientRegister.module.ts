/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 09:36:26
 * @LastEditTime: 2023-03-14 14:03:35
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/clientRegister/clientRegister.module.ts
 */
import { Global, Module } from '@nestjs/common'
import { ClientsModule, ClientsModuleOptions } from '@nestjs/microservices'
import { articleClientOpts } from '../../config/article'
import { logsClientOpts, logsNameTypes } from '../../config/logs'
import { memberClientOpts } from '../../config/member'
import { dbClientOpts } from '../../config/db'
import { ClientRegisterService } from './clientRegister.service'

export class ClientRegisterHelper {
  start(...opts: ClientsModuleOptions) {
    return ClientsModule.register([...opts])
  }
}

const register = new ClientRegisterHelper().start(memberClientOpts, logsClientOpts, articleClientOpts, dbClientOpts)

export interface ClientRegisterModuleOpt {
  logsName: logsNameTypes
}

@Global()
@Module({
  imports: [register],
  providers: [ClientRegisterService],
  exports: [register, ClientRegisterService],
})
export class ClientRegisterModule {}
