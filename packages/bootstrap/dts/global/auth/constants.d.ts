import { int } from '@memo28/types';
import { RolesKeys } from './auth.guard';
export declare const jwtConstants: {
    secret: string;
};
export declare const roles: {
    readonly admin: "admin";
    readonly normalUser: "normalUser";
};
export declare const header: {
    authorization: string;
};
export declare function getRoleIDAccordingToRole(type: RolesKeys): int;
