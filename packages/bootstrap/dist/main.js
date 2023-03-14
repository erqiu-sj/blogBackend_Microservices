"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootStrap = void 0;
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
class BootStrap {
    async startMicroservice(opt) {
        var _a;
        const app = await core_1.NestFactory.createMicroservice(opt.appModule, {
            transport: microservices_1.Transport.TCP,
            options: {
                port: opt.port,
            },
        });
        (_a = opt.getApp) === null || _a === void 0 ? void 0 : _a.call(opt, app);
        app.listen();
        return app;
    }
    async start(opt) {
        var _a;
        const app = await core_1.NestFactory.create(opt.appModule);
        (_a = opt.getApp) === null || _a === void 0 ? void 0 : _a.call(opt, app);
        await app.listen(opt.port);
        return app;
    }
}
exports.BootStrap = BootStrap;
__exportStar(require("./global/clientRegister/clientRegister.module"), exports);
__exportStar(require("./global/clientRegister/clientRegister.service"), exports);
__exportStar(require("./global/auth/auth.module"), exports);
__exportStar(require("./global/auth/auth.service"), exports);
__exportStar(require("./global/auth/auth.guard"), exports);
__exportStar(require("./global/auth/constants"), exports);
__exportStar(require("./global/exceptional/exceptional.filter"), exports);
__exportStar(require("./global/exceptional/types"), exports);
__exportStar(require("./global/db/db.service"), exports);
__exportStar(require("./global/db/db.module"), exports);
__exportStar(require("./rpcConstans/article"), exports);
__exportStar(require("./rpcConstans/db"), exports);
__exportStar(require("./rpcConstans/member"), exports);
__exportStar(require("./config/article"), exports);
__exportStar(require("./types/index"), exports);
__exportStar(require("./config/logs"), exports);
__exportStar(require("./config/member"), exports);
__exportStar(require("./config"), exports);
//# sourceMappingURL=main.js.map