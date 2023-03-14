"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const deleteUser_service_1 = require("../deleteUser.service");
describe('DeleteUserService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [deleteUser_service_1.DeleteUserService],
        }).compile();
        service = module.get(deleteUser_service_1.DeleteUserService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=delete-user.service.spec.js.map