import { Injectable } from '@nestjs/common'
import { getLogs } from './config/event'
import { logsInfoType } from './config/types'

@Injectable()
export class LogsService {
  logs(opt?: logsInfoType) {
    return getLogs(opt.name)[opt.level]({ ...opt.obj }, opt.message)
  }
}
