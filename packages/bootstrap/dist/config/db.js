"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbClientOpts = exports.dbClientName = void 0;
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("../config");
exports.dbClientName = 'db_service';
exports.dbClientOpts = {
    name: exports.dbClientName,
    transport: microservices_1.Transport.TCP,
    options: {
        port: config_1.appClientPorts.db,
    },
};
//# sourceMappingURL=db.js.map