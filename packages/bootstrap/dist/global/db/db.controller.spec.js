"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const db_controller_1 = require("./db.controller");
describe('DbController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [db_controller_1.DbController],
        }).compile();
        controller = module.get(db_controller_1.DbController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=db.controller.spec.js.map