"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberClientOpts = exports.memberClientName = void 0;
const bootstrap_1 = require("@blog/bootstrap");
const microservices_1 = require("@nestjs/microservices");
exports.memberClientName = 'member_service';
exports.memberClientOpts = {
    name: exports.memberClientName,
    transport: microservices_1.Transport.TCP,
    options: {
        port: bootstrap_1.appClientPorts.member,
    },
};
//# sourceMappingURL=client.js.map