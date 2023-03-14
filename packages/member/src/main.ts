/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:33:28
 * @LastEditTime: 2023-03-14 16:35:27
 * @Description:
 * @FilePath: /backend/packages/member/src/main.ts
 */
import { BootStrap, appPort, ExceptionalFilterForRpc } from '@blog/bootstrap'
import { MemberModule } from './member.module'

new BootStrap().startMicroservice({
  appModule: MemberModule,
  port: appPort.member,
  getApp(app) {
    app.useGlobalFilters(new ExceptionalFilterForRpc())
  },
})
