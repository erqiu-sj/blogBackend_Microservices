"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@blog/bootstrap");
const article_module_1 = require("./article.module");
new bootstrap_1.BootStrap().startMicroservice({
    appModule: article_module_1.ArticleModule,
    port: bootstrap_1.appPort.article,
});
//# sourceMappingURL=main.js.map