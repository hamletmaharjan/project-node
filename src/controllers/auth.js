import HttpStatus from 'http-status-codes';
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

import * as authService from '../services/authService';
import * as userService from '../services/userService';

/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
  //   req.body.password = bcrypt.hashSync(req.body.password, 10);
  // let infos = {};

  authService
    .getUser({ email: req.body.email })
    .then((data) => {
      const result = JSON.parse(JSON.stringify(data));

      // res.json({msg:'ss'+result.email});
      if (bcrypt.compareSync(req.body.password, result.password)) {
        const infos = {};

        infos.id = result.id;
        infos.email = result.email;
        infos.role = result.role;
        const token = jwt.sign(infos, 'shh');

        res.json({id:result.id,  token: token , name: result.name, username: result.username, auth: true});
        // res.json(data );
      } else {
        res.status(401).json({ message: 'Incorrect email or password' , auth:false });
      }
    })
    .catch((err) => next(err));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function signup(req, res, next) {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  userService
    .createUser(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}