"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyRole = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
const Roles = (types) => (0, common_1.SetMetadata)('roles', types);
exports.Roles = Roles;
let VerifyRole = class VerifyRole {
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles.length)
            return true;
        const request = context.switchToHttp().getRequest();
        const authorization = request.header(constants_1.header.authorization);
        return roles.includes(this.authService.verify(authorization).roles);
    }
};
VerifyRole = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, auth_service_1.AuthService])
], VerifyRole);
exports.VerifyRole = VerifyRole;
//# sourceMappingURL=auth.guard.js.map