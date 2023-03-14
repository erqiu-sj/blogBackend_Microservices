/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:10:43
 * @LastEditTime: 2023-03-14 11:38:50
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/main.ts
 */
import { INestApplication, INestMicroservice } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

export interface BootStrapStartMicroserviceOpt<T> {
  appModule: any
  port: number
  getApp?: (app: T) => void
}
export interface BootStrapStartAppOpt<T> {
  appModule: any
  port: number
  getApp?: (app: T) => void
}

export class BootStrap {
  /**
   * @description 启动微服务
   */
  async startMicroservice(opt: BootStrapStartMicroserviceOpt<INestMicroservice>): Promise<INestMicroservice> {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(opt.appModule, {
      transport: Transport.TCP,
      options: {
        port: opt.port,
      },
    })
    opt.getApp?.(app)
    app.listen()
    return app
  }

  /**
   * @description 注册单体服务
   */
  async start(opt: BootStrapStartAppOpt<INestApplication>): Promise<INestApplication> {
    const app = await NestFactory.create(opt.appModule)
    opt.getApp?.(app)
    await app.listen(opt.port)
    return app
  }
}
export * from './global/clientRegister/clientRegister.module'
export * from './global/clientRegister/clientRegister.service'
export * from './global/auth/auth.module'
export * from './global/auth/auth.service'
export * from './global/auth/auth.guard'
export * from './global/auth/constants'
export * from './global/exceptional/exceptional.filter'
export * from './global/exceptional/types'
export * from './global/db/db.service'
export * from './global/db/db.module'
export * from './rpcConstans/article'
export * from './rpcConstans/db'
export * from './rpcConstans/member'
export * from './config/article'
export * from './types/index'
export * from './config/logs'
export * from './config/member'
export * from './config'
