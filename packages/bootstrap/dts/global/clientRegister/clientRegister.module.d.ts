import { ClientsModuleOptions } from '@nestjs/microservices'
import { logsNameTypes } from '../../config/logs'
export declare class ClientRegisterHelper {
  start(...opts: ClientsModuleOptions): import('@nestjs/common').DynamicModule
}
export interface ClientRegisterModuleOpt {
  logsName: logsNameTypes
}
export declare class ClientRegisterModule {}
