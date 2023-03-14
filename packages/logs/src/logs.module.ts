/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:29:20
 * @LastEditTime: 2023-03-13 09:25:54
 * @Description:
 * @FilePath: /backend/packages/logs/src/logs.module.ts
 */

import { Module } from '@nestjs/common'
import { LogsController } from './logs.controller'
import { LogsService } from './logs.service'

@Module({
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
