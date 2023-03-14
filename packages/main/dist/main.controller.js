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
exports.MainController = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let MainController = class MainController {
    constructor(clientRegisterService, authService) {
        this.clientRegisterService = clientRegisterService;
        this.authService = authService;
    }
    add() {
        return (0, rxjs_1.of)(this.authService.sign({ username: 'hooks28', roles: 'admin' }));
    }
};
__decorate([
    (0, common_1.UseGuards)(bootstrap_1.VerifyRole),
    (0, bootstrap_1.Roles)(['admin']),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], MainController.prototype, "add", null);
MainController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [bootstrap_1.ClientRegisterService, bootstrap_1.AuthService])
], MainController);
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map