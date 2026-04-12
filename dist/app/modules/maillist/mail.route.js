"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const mail_validation_1 = require("./mail.validation");
const mail_controller_1 = require("./mail.controller");
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(mail_validation_1.mailValidator.create), mail_controller_1.mailController.create);
router.patch('/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(mail_validation_1.mailValidator.update), mail_controller_1.mailController.update);
router.delete('/:id', mail_controller_1.mailController.deleteById);
router.get('/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), mail_controller_1.mailController.getById);
router.get('/', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), mail_controller_1.mailController.getAll);
const MailListRouter = router;
exports.default = MailListRouter;
