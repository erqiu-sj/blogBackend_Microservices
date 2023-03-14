/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:16:46
 * @LastEditTime: 2023-03-14 11:42:14
 * @Description:
 * @FilePath: /backend/packages/db/src/db.module.ts
 */
import { Module } from '@nestjs/common'
import { MemberModule } from './member/member.module'
import { ArticleModule } from './article/article.module'

@Module({
  imports: [MemberModule, ArticleModule],
})
export class DbModule {}
