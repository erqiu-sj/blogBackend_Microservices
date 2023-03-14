/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 12:33:12
 * @LastEditTime: 2023-03-12 21:12:18
 * @Description:
 * @FilePath: /backend/packages/article/src/main.ts
 */
import { appPort, BootStrap } from '@blog/bootstrap'
import { ArticleModule } from './article.module'

new BootStrap().startMicroservice({
  appModule: ArticleModule,
  port: appPort.article,
})
