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
const member_service_1 = require("./member.service");
let MemberController = class MemberController {
    constructor(memberService) {
        this.memberService = memberService;
    }
    createUser(opt) {
        const result = this.memberService.createuser(opt);
        return result;
    }
    deleteUser(opt) {
        return this.memberService.deleteUser(opt.id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(bootstrap_1.MemberRpcConstans.db.createUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "createUser", null);
__decorate([
    (0, microservices_1.MessagePattern)(bootstrap_1.MemberRpcConstans.db.deleteUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "deleteUser", null);
MemberController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [member_service_1.MemberService])
], MemberController);
exports.MemberController = MemberController;
//# sourceMappingURL=member.controller.js.map