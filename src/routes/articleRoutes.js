// import { func } from '@hapi/joi';
import { Router } from 'express';

var multer  = require('multer');

import * as articleController from '../controllers/articles';
// import * as userController from '../controllers/users';
// import { findUser, userValidator } from '../validators/userValidator';


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

/**
 * POST /api/users
 */
router.post('/',upload.single('image'), function(req, res, next) {
    console.log(req.body);
    res.json({msg: "c"});
});

// /**
//  * PUT /api/users/:id
//  */
// router.put('/:id', todoController.update);

// /**
//  * DELETE /api/users/:id
//  */
// router.delete('/:id', todoController.deleteUser);

export default router;
