"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@blog/bootstrap");
const main_module_1 = require("./main.module");
new bootstrap_1.BootStrap().start({
    appModule: main_module_1.MainModule,
    port: bootstrap_1.appPort.main,
    getApp(app) {
        app.useGlobalFilters(new bootstrap_1.ExceptionalFilter());
    },
});
//# sourceMappingURL=main.js.map