/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 13:45:37
 * @LastEditTime: 2023-03-13 14:24:18
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/jwtStrategy.ts
 */

import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { jwtConstants } from './constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: any) {
    console.log(payload, 'payload')
    return payload
  }
}
