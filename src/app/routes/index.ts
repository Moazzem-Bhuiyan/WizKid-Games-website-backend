import { Router } from 'express';
import { otpRoutes } from '../modules/otp/otp.routes';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.route';
import velkiAgentRouter from '../modules/velkiAgent/velkiAgent.route';
import DevBlogRouter from '../modules/devblog/devblog.route';
import MailListRouter from '../modules/maillist/mail.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/otp',
    route: otpRoutes,
  },
  {
    path: '/velki-agent',
    route: velkiAgentRouter,
  },
  {
    path: '/devblog',
    route: DevBlogRouter,
  },
  {
    path: '/mail-list',
    route: MailListRouter,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
