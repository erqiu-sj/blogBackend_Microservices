"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleClientOpts = exports.articleClientName = void 0;
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("../config");
exports.articleClientName = 'article_service';
exports.articleClientOpts = {
    name: exports.articleClientName,
    transport: microservices_1.Transport.TCP,
    options: {
        port: config_1.appClientPorts.article,
    },
};
//# sourceMappingURL=article.js.map