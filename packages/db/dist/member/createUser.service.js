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
exports.CreateUserService = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const common_1 = require("@nestjs/common");
let CreateUserService = class CreateUserService {
    constructor(DbService, clientRegisterService) {
        this.DbService = DbService;
        this.clientRegisterService = clientRegisterService;
    }
    setUserOpt(userOpt) {
        this.userOpt = userOpt;
        return this;
    }
    createUserLog() {
        this.clientRegisterService.triggerLogs({
            name: 'db',
            level: 'info',
            obj: {
                payload: JSON.stringify(this.userOpt),
            },
            message: 'createUserLog',
        });
        return this;
    }
    async createUser() {
        await this.DbService.member
            .create({
            data: Object.assign({}, this.userOpt),
        })
            .catch(e => {
            throw new bootstrap_1.OwnRpcException(500, '创建用户失败', e);
        });
        return this;
    }
    getResult() {
        return { status: 200, msg: '0k', data: [] };
    }
};
CreateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bootstrap_1.DbService, bootstrap_1.ClientRegisterService])
], CreateUserService);
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=createUser.service.js.map