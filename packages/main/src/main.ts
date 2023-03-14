/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:13:54
 * @LastEditTime: 2023-03-14 16:32:00
 * @Description:
 * @FilePath: /backend/packages/main/src/main.ts
 */
import { BootStrap, appPort, ExceptionalFilter } from '@blog/bootstrap'
import { MainModule } from './main.module'

new BootStrap().start({
  appModule: MainModule,
  port: appPort.main,
  getApp(app) {
    app.useGlobalFilters(new ExceptionalFilter())
  },
})
