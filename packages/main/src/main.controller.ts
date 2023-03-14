/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:27:07
 * @LastEditTime: 2023-03-13 23:04:29
 * @Description:
 * @FilePath: /backend/packages/main/src/main.controller.ts
 */
import { AuthService, ClientRegisterService, Roles, VerifyRole, roles } from '@blog/bootstrap'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { Observable, of } from 'rxjs'

@Controller()
export class MainController {
  constructor(private clientRegisterService: ClientRegisterService, private authService: AuthService) {}

  @UseGuards(VerifyRole)
  @Roles(['admin'])
  @Get()
  add(): Observable<any> {
    return of(this.authService.sign({ username: 'hooks28', roles: 'admin' }))
  }
}
