"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const common_1 = require("@nestjs/common");
const main_controller_1 = require("./main.controller");
const main_service_1 = require("./main.service");
const member_controller_1 = require("./member/member.controller");
const member_module_1 = require("./member/member.module");
const member_service_1 = require("./member/member.service");
let MainModule = class MainModule {
};
MainModule = __decorate([
    (0, common_1.Module)({
        imports: [bootstrap_1.ClientRegisterModule, bootstrap_1.AuthModule, member_module_1.MemberModule],
        providers: [main_service_1.MainService, member_service_1.MemberService],
        controllers: [main_controller_1.MainController, member_controller_1.MemberController],
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map