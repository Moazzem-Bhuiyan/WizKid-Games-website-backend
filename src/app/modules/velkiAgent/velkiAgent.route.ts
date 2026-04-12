import { Router } from 'express';
import { velkiAgentController } from './velkiAgent.controller';
import validateRequest from '../../middleware/validateRequest';
import { velkiAgentValidator } from './velkiAgent.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(velkiAgentValidator.create),
  velkiAgentController.create,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(velkiAgentValidator.create),
  velkiAgentController.update,
);
router.delete('/:id', velkiAgentController.deleteById);
router.get('/:id', velkiAgentController.getById);
router.get('/', velkiAgentController.getAll);

const velkiAgentRouter = router;
export default velkiAgentRouter;
