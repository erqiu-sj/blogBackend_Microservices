/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:29:18
 * @LastEditTime: 2023-03-13 15:29:32
 * @Description:
 * @FilePath: /backend/packages/logs/src/logs.controller.ts
 */
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { LogsService } from './logs.service'
import { logsInfoType } from './config/types'
import { LogEventPattern } from './entry'

@Controller()
export class LogsController {
  constructor(private logsService: LogsService) {}

  @EventPattern(LogEventPattern)
  logs(opt: logsInfoType) {
    return this.logsService.logs(opt)
  }
}
