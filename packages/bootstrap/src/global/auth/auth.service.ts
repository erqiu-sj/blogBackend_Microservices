/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 10:42:12
 * @LastEditTime: 2023-03-13 23:02:50
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/auth.service.ts
 */
import { obj, str } from '@memo28/types'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { tokenCarriesInformation } from './types'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {
    this.jwtService.sign
  }
  sign(payload: tokenCarriesInformation): string {
    return this.jwtService.sign(payload)
  }

  verify<T extends obj>(token: str): tokenCarriesInformation & T {
    return this.jwtService.verify(token)
  }
}
