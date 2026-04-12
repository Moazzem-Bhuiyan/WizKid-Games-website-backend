import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';

import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';
import { devBlogValidator } from './devblog.validation';
import { devblogController } from './devblog.controller';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(devBlogValidator.create),
  devblogController.create,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(devBlogValidator.create),
  devblogController.update,
);
router.delete('/:id', devblogController.deleteById);
router.get('/:id', devblogController.getById);
router.get('/', devblogController.getAll);

const DevBlogRouter = router;
export default DevBlogRouter;
