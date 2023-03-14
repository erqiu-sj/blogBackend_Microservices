"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const logs_controller_1 = require("./logs.controller");
describe('LogsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [logs_controller_1.LogsController],
        }).compile();
        controller = module.get(logs_controller_1.LogsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=logs.controller.spec.js.map