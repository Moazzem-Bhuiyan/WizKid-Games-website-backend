"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const velkiAgent_controller_1 = require("./velkiAgent.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const velkiAgent_validation_1 = require("./velkiAgent.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(velkiAgent_validation_1.velkiAgentValidator.create), velkiAgent_controller_1.velkiAgentController.create);
router.patch('/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(velkiAgent_validation_1.velkiAgentValidator.create), velkiAgent_controller_1.velkiAgentController.update);
router.delete('/:id', velkiAgent_controller_1.velkiAgentController.deleteById);
router.get('/:id', velkiAgent_controller_1.velkiAgentController.getById);
router.get('/', velkiAgent_controller_1.velkiAgentController.getAll);
const velkiAgentRouter = router;
exports.default = velkiAgentRouter;
