"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsName = exports.event = exports.getLogs = exports.eventLogs = void 0;
const bunyan = require("bunyan");
const bootstrap_1 = require("@blog/bootstrap");
exports.eventLogs = {};
bootstrap_1.logsName.forEach(item => {
    exports.eventLogs[item] = bunyan.createLogger({
        name: item,
        serializers: bunyan.stdSerializers,
        stream: process.stdout,
    });
});
function getLogs(key) {
    return exports.eventLogs[key];
}
exports.getLogs = getLogs;
var bootstrap_2 = require("@blog/bootstrap");
Object.defineProperty(exports, "event", { enumerable: true, get: function () { return bootstrap_2.event; } });
Object.defineProperty(exports, "logsName", { enumerable: true, get: function () { return bootstrap_2.logsName; } });
//# sourceMappingURL=event.js.map