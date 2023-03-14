/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:32:21
 * @LastEditTime: 2023-03-14 16:34:50
 * @Description:
 * @FilePath: /backend/packages/db/src/main.ts
 */
import {
  BootStrap,
  // DbService,
  appPort,
  ExceptionalFilterForRpc,
} from '@blog/bootstrap'
import { DbModule } from './db.module'

new BootStrap().startMicroservice({
  appModule: DbModule,
  port: appPort.db,
  getApp(app) {
    app.useGlobalFilters(new ExceptionalFilterForRpc())
    // const dbService = app.get(DbService)
    // dbService.enableShutdownHooks(app)
  },
})
