/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 09:11:41
 * @LastEditTime: 2023-03-14 14:11:30
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/config/logs.ts
 */
import { ClientsModuleOptions, Transport } from '@nestjs/microservices'
import { StdSerializers } from 'bunyan'
import { appClientPorts } from '../config'

export const logsClientName = 'logs_service'

export const LogEventPattern = 'LogEventPattern'

export const logsClientOpts: ClientsModuleOptions[number] = {
  name: logsClientName,
  transport: Transport.TCP,
  options: {
    port: appClientPorts.logs,
  },
}

export const event = {
  fatal: 'fatal', // 致命的 应用停止或现在无法使用
  error: 'error', // 对于特定请求是致命的，但可以继续提供服务，
  warn: 'warn', // 应该查看的信息
  info: 'info', // 常规操作应该查看的内容注释
  debug: 'debug', // 其他任何东西，即太冗长以至于不能包含在info级别
  trace: 'trace', // 记录使用外部库 记录日志 或 非常详细的应用程序日志记录
} as const

export type eventKeys = keyof typeof event

export const logsName = ['member', 'article', 'main', 'db'] as const

export type logsNameTypes = (typeof logsName)[number]

export interface logsInfoType {
  name: logsNameTypes
  level: eventKeys
  obj?: StdSerializers
  message?: any
}
