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
exports.MemberController = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const createUser_service_1 = require("./createUser.service");
const deleteUser_service_1 = require("./deleteUser.service");
const member_service_1 = require("./member.service");
let MemberController = class MemberController {
    constructor(memberService, CreateUserService, deleteUserService) {
        this.memberService = memberService;
        this.CreateUserService = CreateUserService;
        this.deleteUserService = deleteUserService;
    }
    async createUser(opt) {
        return (await this.CreateUserService.setUserOpt(opt).createUserLog().createUser()).getResult();
    }
    async deleteUser(opt) {
        return (await this.deleteUserService.setDeleteId(opt.id).deleteUserLog().deleteUser()).getResult();
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(bootstrap_1.DBRpcConstans.member.createUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "createUser", null);
__decorate([
    (0, microservices_1.MessagePattern)(bootstrap_1.DBRpcConstans.member.deleteUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "deleteUser", null);
MemberController = __decorate([
    (0, common_1.UseFilters)(new bootstrap_1.ExceptionalFilterForRpc()),
    (0, common_1.Controller)('member'),
    __metadata("design:paramtypes", [member_service_1.MemberService, createUser_service_1.CreateUserService, deleteUser_service_1.DeleteUserService])
], MemberController);
exports.MemberController = MemberController;
//# sourceMappingURL=member.controller.js.map