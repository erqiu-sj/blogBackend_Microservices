/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 23:21:38
 * @LastEditTime: 2023-03-14 16:48:14
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/exceptional/types.ts
 */

import { int, str } from '@memo28/types'

export interface ResType<T = unknown> {
  status: int
  msg: str
  stack?: str
  data?: T
  userMsg?: str // 用户提示信息
}
