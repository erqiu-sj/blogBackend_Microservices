/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 09:24:05
 * @LastEditTime: 2023-03-14 10:17:01
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/db/db.module.ts
 */
import { Module } from '@nestjs/common'
import { DbService } from './db.service'
import { DbController } from './db.controller'

@Module({
  controllers: [DbController],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
