"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otp_routes_1 = require("../modules/otp/otp.routes");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const velkiAgent_route_1 = __importDefault(require("../modules/velkiAgent/velkiAgent.route"));
const devblog_route_1 = __importDefault(require("../modules/devblog/devblog.route"));
const mail_route_1 = __importDefault(require("../modules/maillist/mail.route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoutes,
    },
    {
        path: '/otp',
        route: otp_routes_1.otpRoutes,
    },
    {
        path: '/velki-agent',
        route: velkiAgent_route_1.default,
    },
    {
        path: '/devblog',
        route: devblog_route_1.default,
    },
    {
        path: '/mail-list',
        route: mail_route_1.default,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
