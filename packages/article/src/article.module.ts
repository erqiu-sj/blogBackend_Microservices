/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:33:35
 * @LastEditTime: 2023-03-12 20:33:44
 * @Description:
 * @FilePath: /backend/packages/article/src/article/article.module.ts
 */
import { Module } from '@nestjs/common'
import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
