"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleClientOpts = exports.articleClientName = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const microservices_1 = require("@nestjs/microservices");
exports.articleClientName = 'article_service';
exports.articleClientOpts = {
    name: exports.articleClientName,
    transport: microservices_1.Transport.TCP,
    options: {
        port: bootstrap_1.appClientPorts.article,
    },
};
//# sourceMappingURL=client.js.map