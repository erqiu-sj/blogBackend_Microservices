/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 21:50:44
 * @LastEditTime: 2023-03-14 10:38:59
 * @Description:
 * @FilePath: /backend/packages/logs/src/config/event.ts
 */
import * as bunyan from 'bunyan'
import { logsName, logsNameTypes } from '@blog/bootstrap'

export const eventLogs: { [key in logsNameTypes]?: bunyan } = {}

logsName.forEach(item => {
  eventLogs[item] = bunyan.createLogger({
    name: item,
    serializers: bunyan.stdSerializers,
    stream: process.stdout,
  })
})

export function getLogs(key: logsNameTypes): bunyan {
  return eventLogs[key]
}

export { event, eventKeys, logsName, logsNameTypes } from '@blog/bootstrap'
