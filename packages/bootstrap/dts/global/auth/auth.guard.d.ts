import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { roles } from './constants';
export type RolesKeys = keyof typeof roles;
export declare const Roles: (types: RolesKeys[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class VerifyRole implements CanActivate {
    private reflector;
    private authService;
    constructor(reflector: Reflector, authService: AuthService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
