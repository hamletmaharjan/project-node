import { Router } from 'express';

import * as userController from '../controllers/users';
import { findUser, userValidator } from '../validators/userValidator';
import * as verification from '../middlewares/verification';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', userController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get('/:id', userController.fetchById);

/**
 * POST /api/users
 */
router.post('/', userValidator, userController.create);

/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findUser, userController.deleteUser);



router
  .route('/:id/articles')
  .get(userController.fetchAllArticles);


router
  .route('/:id/articles/:articleId')
  .get(userController.fetchArticle);

export default router;
