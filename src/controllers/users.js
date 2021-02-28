import HttpStatus from 'http-status-codes';

import * as userService from '../services/userService';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  userService
    .getAllUsers()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  userService
    .getUser(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  userService
    .createUser(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  userService
    .updateUser(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteUser(req, res, next) {
  userService
    .deleteUser(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
}











/**
 * Fetch all articles for the user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAllArticles(req, res, next) {
  userService
    .getArticles(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Fetch article for the user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchArticle(req, res, next) {
  userService
    .getArticle(req.params.id, req.params.articleId)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}


/**
 * Create a new article.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function createArticle(req, res, next) {
  req.body.image = req.file.filename;
  console.log(req.user.id);
  // res.json({msg:"test"});
  userService
    .createArticle(req.user.id,req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

// /**
//  * Update a todo.
//  *
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
// export function updateTodo(req, res, next) {
//   userService
//     .updateTodo(req.params.todoId, req.body)
//     .then((data) => res.json({ data }))
//     .catch((err) => next(err));
// }

// /**
//  * Delete a todo.
//  *
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
// export function deleteTodo(req, res, next) {
//   userService
//     .deleteTodo(req.params.todoId)
//     .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
//     .catch((err) => next(err));
// }

