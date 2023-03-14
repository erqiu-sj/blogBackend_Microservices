"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsName = exports.event = exports.logsClientOpts = exports.LogEventPattern = exports.logsClientName = void 0;
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("../config");
exports.logsClientName = 'logs_service';
exports.LogEventPattern = 'LogEventPattern';
exports.logsClientOpts = {
    name: exports.logsClientName,
    transport: microservices_1.Transport.TCP,
    options: {
        port: config_1.appClientPorts.logs,
    },
};
exports.event = {
    fatal: 'fatal',
    error: 'error',
    warn: 'warn',
    info: 'info',
    debug: 'debug',
    trace: 'trace',
};
exports.logsName = ['member', 'article', 'main', 'db'];
//# sourceMappingURL=logs.js.map