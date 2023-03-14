/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:33:18
 * @LastEditTime: 2023-03-12 20:46:07
 * @Description:
 * @FilePath: /backend/packages/logs/src/main.ts
 */
import { BootStrap, appPort } from '@blog/bootstrap'
import { LogsModule } from './logs.module'

new BootStrap().startMicroservice({
  appModule: LogsModule,
  port: appPort.logs,
})
