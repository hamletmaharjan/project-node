// import HttpStatus from 'http-status-codes';

import * as articleService from '../services/articleService';

/**
 * Get all articles.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  articleService
    .getAllArticles()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Get a article by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  articleService
    .getArticle(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

// /**
//  * Create a new user.
//  *
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
// export function create(req, res, next) {
//   todoService
//     .createTodo(req.body)
//     .then((data) => res.status(HttpStatus.CREATED).json({ data }))
//     .catch((err) => next(err));
// }

// /**
//  * Update a user.
//  *
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
// export function update(req, res, next) {
//   todoService
//     .updateTodo(req.params.id, req.body)
//     .then((data) => res.json({ data }))
//     .catch((err) => next(err));
// }

// /**
//  * Delete a user.
//  *
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
// export function deleteUser(req, res, next) {
//   todoService
//     .deleteTodo(req.params.id)
//     .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
//     .catch((err) => next(err));
// }
