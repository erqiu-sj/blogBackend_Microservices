/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 09:24:04
 * @LastEditTime: 2023-03-14 10:16:56
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/db/db.service.ts
 */
import { INestMicroservice, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }

  async enableShutdownHooks(app: INestMicroservice) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
