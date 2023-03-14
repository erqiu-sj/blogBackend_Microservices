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
exports.ClientRegisterService = void 0;
const common_1 = require("@nestjs/common");
const logs_1 = require("../config/logs");
const article_1 = require("../config/article");
const member_1 = require("../config/member");
const microservices_1 = require("@nestjs/microservices");
const logs_2 = require("@blog/logs");
let ClientRegisterService = class ClientRegisterService {
    triggerLogs() {
        this.logs.emit(logs_2.LogEventPattern, {});
    }
    triggerMember(type) {
        return this.member.emit(type, {});
    }
    triggerArticle(type) {
        return this.article.emit(type, {});
    }
};
__decorate([
    (0, common_1.Inject)(logs_1.logsClientName),
    __metadata("design:type", microservices_1.ClientProxy)
], ClientRegisterService.prototype, "logs", void 0);
__decorate([
    (0, common_1.Inject)(article_1.articleClientName),
    __metadata("design:type", microservices_1.ClientProxy)
], ClientRegisterService.prototype, "article", void 0);
__decorate([
    (0, common_1.Inject)(member_1.memberClientName),
    __metadata("design:type", microservices_1.ClientProxy)
], ClientRegisterService.prototype, "member", void 0);
ClientRegisterService = __decorate([
    (0, common_1.Injectable)()
], ClientRegisterService);
exports.ClientRegisterService = ClientRegisterService;
//# sourceMappingURL=clientRegister.service.js.map