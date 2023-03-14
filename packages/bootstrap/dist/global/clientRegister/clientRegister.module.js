"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRegisterModule = exports.ClientRegisterHelper = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const article_1 = require("../../config/article");
const logs_1 = require("../../config/logs");
const member_1 = require("../../config/member");
const db_1 = require("../../config/db");
const clientRegister_service_1 = require("./clientRegister.service");
class ClientRegisterHelper {
    start(...opts) {
        return microservices_1.ClientsModule.register([...opts]);
    }
}
exports.ClientRegisterHelper = ClientRegisterHelper;
const register = new ClientRegisterHelper().start(member_1.memberClientOpts, logs_1.logsClientOpts, article_1.articleClientOpts, db_1.dbClientOpts);
let ClientRegisterModule = class ClientRegisterModule {
};
ClientRegisterModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [register],
        providers: [clientRegister_service_1.ClientRegisterService],
        exports: [register, clientRegister_service_1.ClientRegisterService],
    })
], ClientRegisterModule);
exports.ClientRegisterModule = ClientRegisterModule;
//# sourceMappingURL=clientRegister.module.js.map