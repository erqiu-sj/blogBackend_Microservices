/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 14:31:21
 * @LastEditTime: 2023-03-13 23:08:49
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/auth.guard.ts
 */
import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import { roles } from './constants'
import { header } from './constants'

export type RolesKeys = keyof typeof roles

export const Roles = (types: RolesKeys[]) => SetMetadata('roles', types)

@Injectable()
export class VerifyRole implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<RolesKeys[]>('roles', context.getHandler())
    if (!roles.length) return true
    const request = context.switchToHttp().getRequest()
    const authorization = request.header(header.authorization)
    // 解密token中的角色信息对比是否为守卫指定角色信息
    return roles.includes(this.authService.verify(authorization).roles as RolesKeys)
  }
}
