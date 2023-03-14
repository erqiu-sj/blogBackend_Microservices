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
const logs_1 = require("../../config/logs");
const article_1 = require("../../config/article");
const member_1 = require("../../config/member");
const db_1 = require("../../config/db");
const microservices_1 = require("@nestjs/microservices");
let ClientRegisterService = class ClientRegisterService {
    constructor() {
        this.logsName = 'article';
    }
    setLogsName(name) {
        this.logsName = name;
        return this;
    }
    triggerLogs(info) {
        this.logs.emit(logs_1.LogEventPattern, Object.assign({ name: this.logsName }, info));
    }
    triggerMember(type, args) {
        return this.member.send(type, args);
    }
    triggerArticle(type) {
        return this.article.emit(type, {});
    }
    triggerDb(type, args) {
        return this.db.send(type, args);
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
__decorate([
    (0, common_1.Inject)(db_1.dbClientName),
    __metadata("design:type", microservices_1.ClientProxy)
], ClientRegisterService.prototype, "db", void 0);
ClientRegisterService = __decorate([
    (0, common_1.Injectable)()
], ClientRegisterService);
exports.ClientRegisterService = ClientRegisterService;
//# sourceMappingURL=clientRegister.service.js.map