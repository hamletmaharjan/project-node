import { Router } from 'express';

import * as authController from '../controllers/auth';
import { userValidator } from '../validators/userValidator';

const router = Router();

/**
 * POST /api/login
 */
router.post('/login', authController.login);

/**
 * POST /api/signup
 */
router.post('/signup', authController.signup);

export default router;
