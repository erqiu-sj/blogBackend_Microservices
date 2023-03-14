"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@blog/bootstrap");
const logs_module_1 = require("./logs.module");
new bootstrap_1.BootStrap().startMicroservice({
    appModule: logs_module_1.LogsModule,
    port: bootstrap_1.appPort.logs,
});
//# sourceMappingURL=main.js.map