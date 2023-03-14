"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionalFilterForRpc = exports.OwnRpcException = exports.ExceptionalFilter = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let ExceptionalFilter = class ExceptionalFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(500).json({
            status: 500,
            msg: exception.message,
            stack: exception.stack,
        });
    }
};
ExceptionalFilter = __decorate([
    (0, common_1.Catch)()
], ExceptionalFilter);
exports.ExceptionalFilter = ExceptionalFilter;
class OwnRpcException extends microservices_1.RpcException {
    constructor(code, userMsg, msg) {
        super(msg);
        this.code = code;
        this.userMsg = userMsg;
    }
    getCause() {
        return {
            status: this.code,
            userMsg: this.userMsg,
            msg: this.message,
        };
    }
}
exports.OwnRpcException = OwnRpcException;
let ExceptionalFilterForRpc = class ExceptionalFilterForRpc {
    handleUnknownError(exception, status) {
        return;
    }
    isError(exception) {
        console.log(exception, 'exception');
        return exception;
    }
    catch(exception, host) {
        const ctx = host.switchToRpc();
        const context = ctx.getContext();
        const errorServiceName = context.args[context.args.length - 1];
        return (0, rxjs_1.of)({
            status: 500,
            msg: exception.message,
            stack: `${errorServiceName} => ${JSON.stringify(ctx.getData())}`,
        });
    }
};
ExceptionalFilterForRpc = __decorate([
    (0, common_1.Catch)()
], ExceptionalFilterForRpc);
exports.ExceptionalFilterForRpc = ExceptionalFilterForRpc;
//# sourceMappingURL=exceptional.filter.js.map