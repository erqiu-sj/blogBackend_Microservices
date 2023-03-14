"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const member_controller_1 = require("./member.controller");
describe('MemberController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [member_controller_1.MemberController],
        }).compile();
        controller = module.get(member_controller_1.MemberController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=member.controller.spec.js.map