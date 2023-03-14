"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const article_service_1 = require("./article.service");
describe('ArticleService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [article_service_1.ArticleService],
        }).compile();
        service = module.get(article_service_1.ArticleService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=article.service.spec.js.map