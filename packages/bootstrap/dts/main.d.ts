import { INestApplication, INestMicroservice } from '@nestjs/common';
export interface BootStrapStartMicroserviceOpt<T> {
    appModule: any;
    port: number;
    getApp?: (app: T) => void;
}
export interface BootStrapStartAppOpt<T> {
    appModule: any;
    port: number;
    getApp?: (app: T) => void;
}
export declare class BootStrap {
    startMicroservice(opt: BootStrapStartMicroserviceOpt<INestMicroservice>): Promise<INestMicroservice>;
    start(opt: BootStrapStartAppOpt<INestApplication>): Promise<INestApplication>;
}
export * from './global/clientRegister/clientRegister.module';
export * from './global/clientRegister/clientRegister.service';
export * from './global/auth/auth.module';
export * from './global/auth/auth.service';
export * from './global/auth/auth.guard';
export * from './global/auth/constants';
export * from './global/exceptional/exceptional.filter';
export * from './global/exceptional/types';
export * from './global/db/db.service';
export * from './global/db/db.module';
export * from './rpcConstans/article';
export * from './rpcConstans/db';
export * from './rpcConstans/member';
export * from './config/article';
export * from './types/index';
export * from './config/logs';
export * from './config/member';
export * from './config';
