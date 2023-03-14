import { int, str } from '@memo28/types'

export interface ResType<T = unknown> {
  status: int
  msg: str
  stack?: str
  data?: T
  userMsg?: str
}
