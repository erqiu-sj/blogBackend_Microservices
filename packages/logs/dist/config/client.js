"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsClientOpts = exports.logsClientName = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const microservices_1 = require("@nestjs/microservices");
exports.logsClientName = 'article_service';
exports.logsClientOpts = {
    name: exports.logsClientName,
    transport: microservices_1.Transport.TCP,
    options: {
        port: bootstrap_1.appClientPorts.logs,
    },
};
//# sourceMappingURL=client.js.map