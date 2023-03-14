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
exports.LogsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const logs_service_1 = require("./logs.service");
const entry_1 = require("./entry");
let LogsController = class LogsController {
    constructor(logsService) {
        this.logsService = logsService;
    }
    logs(opt) {
        return this.logsService.logs(opt);
    }
};
__decorate([
    (0, microservices_1.EventPattern)(entry_1.LogEventPattern),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "logs", null);
LogsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsController);
exports.LogsController = LogsController;
//# sourceMappingURL=logs.controller.js.map