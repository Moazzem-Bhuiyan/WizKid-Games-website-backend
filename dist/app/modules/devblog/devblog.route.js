"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const devblog_validation_1 = require("./devblog.validation");
const devblog_controller_1 = require("./devblog.controller");
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(devblog_validation_1.devBlogValidator.create), devblog_controller_1.devblogController.create);
router.patch('/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(devblog_validation_1.devBlogValidator.create), devblog_controller_1.devblogController.update);
router.delete('/:id', devblog_controller_1.devblogController.deleteById);
router.get('/:id', devblog_controller_1.devblogController.getById);
router.get('/', devblog_controller_1.devblogController.getAll);
const DevBlogRouter = router;
exports.default = DevBlogRouter;
