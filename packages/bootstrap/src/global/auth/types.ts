/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 23:00:42
 * @LastEditTime: 2023-03-13 23:02:12
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/types.ts
 */
import { RolesKeys } from './auth.guard'

/**
 * @description token携带信息
 */
export type tokenCarriesInformation = {
  username: string // 用户名
  roles: RolesKeys | ''
}
