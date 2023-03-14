"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@blog/bootstrap");
const db_module_1 = require("./db.module");
new bootstrap_1.BootStrap().startMicroservice({
    appModule: db_module_1.DbModule,
    port: bootstrap_1.appPort.db,
    getApp(app) {
        app.useGlobalFilters(new bootstrap_1.ExceptionalFilterForRpc());
    },
});
//# sourceMappingURL=main.js.map