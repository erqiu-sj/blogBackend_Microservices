"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRegister = void 0;
const microservices_1 = require("@nestjs/microservices");
class ClientRegister {
    start(...opts) {
        return microservices_1.ClientsModule.register([...opts]);
    }
}
exports.ClientRegister = ClientRegister;
//# sourceMappingURL=clientRegister.js.map