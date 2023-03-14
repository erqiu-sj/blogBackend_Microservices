"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const member_service_1 = require("./member.service");
describe('MemberService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [member_service_1.MemberService],
        }).compile();
        service = module.get(member_service_1.MemberService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=member.service.spec.js.map