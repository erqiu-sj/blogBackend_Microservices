"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@blog/bootstrap");
const member_module_1 = require("./member.module");
new bootstrap_1.BootStrap().startMicroservice({
    appModule: member_module_1.MemberModule,
    port: bootstrap_1.appPort.member,
    getApp(app) {
        app.useGlobalFilters(new bootstrap_1.ExceptionalFilterForRpc());
    },
});
//# sourceMappingURL=main.js.map