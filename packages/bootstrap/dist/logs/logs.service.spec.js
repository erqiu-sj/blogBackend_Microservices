"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const logs_service_1 = require("./logs.service");
describe('LogsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [logs_service_1.LogsService],
        }).compile();
        service = module.get(logs_service_1.LogsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=logs.service.spec.js.map