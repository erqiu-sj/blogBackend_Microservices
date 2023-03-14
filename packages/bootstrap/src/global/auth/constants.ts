/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 11:02:18
 * @LastEditTime: 2023-03-14 11:16:52
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/constants.ts
 */

import { int } from '@memo28/types'
import { RolesKeys } from './auth.guard'

export const jwtConstants = {
  secret: 'Qsj.0228',
}

export const roles = {
  admin: 'admin', // 管理员
  normalUser: 'normalUser', // 普通用户
} as const

export const header = {
  authorization: 'authorization',
}
const rolesId: { [key in RolesKeys]: number } = {
  admin: 1,
  normalUser: 2,
}

/**
 * @description 根据角色获取角色id
 */
export function getRoleIDAccordingToRole(type: RolesKeys): int {
  return rolesId[type]
}
