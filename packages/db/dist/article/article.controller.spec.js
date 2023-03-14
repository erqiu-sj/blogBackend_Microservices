"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const article_controller_1 = require("./article.controller");
describe('ArticleController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [article_controller_1.ArticleController],
        }).compile();
        controller = module.get(article_controller_1.ArticleController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=article.controller.spec.js.map