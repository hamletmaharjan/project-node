import { Router } from 'express';
import multer from 'multer';

import * as userController from '../controllers/users';
import { findUser, userValidator } from '../validators/userValidator';
import * as verification from '../middlewares/verification';


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname;
        let splitted = fileName.split('.');

      cb(null, file.fieldname + '-' + Date.now() + '.' + splitted[splitted.length-1]);
    }
  })
   
let upload = multer({ storage: storage })

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
  .get(userController.fetchAllArticles)
  .post(verification.verifyUser, upload.single('image'), userController.createArticle);


router
  .route('/:id/articles/:articleId')
  .get(userController.fetchArticle);

export default router;
