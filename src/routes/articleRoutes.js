// import { func } from '@hapi/joi';
import { Router } from 'express';

import * as articleController from '../controllers/articles';
// import * as userController from '../controllers/users';
// import { findUser, userValidator } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/articles
 */
router.get('/', articleController.fetchAll);
// router.get('/', function(req, res) {
//     res.json({message:'toto'});
// })

/**
 * GET /api/articles/:id
 */
router.get('/:id', articleController.fetchById);

// /**
//  * POST /api/users
//  */
// router.post('/', todoController.create);

// /**
//  * PUT /api/users/:id
//  */
// router.put('/:id', todoController.update);

// /**
//  * DELETE /api/users/:id
//  */
// router.delete('/:id', todoController.deleteUser);

export default router;
