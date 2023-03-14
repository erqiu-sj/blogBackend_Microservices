/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 10:42:14
 * @LastEditTime: 2023-03-13 23:06:25
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/auth.module.ts
 */
/*
 * @Author: 邱狮杰
 * @Date: 2023-03-13 10:42:14
 * @LastEditTime: 2023-03-13 11:35:54
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/global/auth/auth.module.ts
 */
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { jwtConstants } from './constants'

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
