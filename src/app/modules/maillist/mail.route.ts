import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';

import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';
import { mailValidator } from './mail.validation';
import { mailController } from './mail.controller';

const router = Router();

router.post('/', validateRequest(mailValidator.create), mailController.create);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(mailValidator.update),
  mailController.update,
);
router.delete('/:id', mailController.deleteById);
router.get('/:id', auth(USER_ROLE.admin), mailController.getById);
router.get('/', auth(USER_ROLE.admin), mailController.getAll);

const MailListRouter = router;
export default MailListRouter;
