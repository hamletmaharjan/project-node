import Boom from '@hapi/boom';

import User from '../models/user';
import Article from '../models/article';

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return User.fetchAll();
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id) {
  return new User({ id })
    .fetch()
    .then(user => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function createUser(user) {
  return new User(user).save();
}

/**
 * Update a user.
 *
 * @param   {Number|String}  id
 * @param   {Object}         user
 * @returns {Promise}
 */
export function updateUser(id, user) {
  return new User({ id }).save({ name: user.name });
}

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return new User({ id }).fetch().then(user => user.destroy());
}












/**
 * Get articles of user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getArticles(id) {
  return Article.where('user_id', id)
    .fetchAll()
    .then((articles) => {
      let x = JSON.parse(JSON.stringify(articles));
      let result = x.map(function (article) { 
          article.image = "/images/" + article.image;
          return article;
      });
      return result;
    })
    .catch(Article.NotFoundError, () => {
      throw Boom.notFound('Article not found');
    });
}

/**
 * Get an article of a user
 * 
 * @param  {String} userId
 * @param  {String} todoId
 */
export function getArticle(userId, articleId) {
  return Article.where('user_id', userId)
    .where('id', articleId)
    .fetch()
    .then((article) => {
      let result = JSON.parse(JSON.stringify(article));
        result.image = "/images/" + result.image;
        return result;
    })
    .catch(Article.NotFoundError, () => {
      throw Boom.notFound('Article not found');
    });
}

// /**
//  * Create new todo.
//  *
//  * @param   {Object}  todo
//  * @returns {Promise}
//  */
// export function createTodo(userId, todo) {
//   return new Todo({ title: todo.title, user_id: userId, completed: todo.completed }).save();
// }





// /**
//  * Update a todo.
//  *
//  * @param   {Number|String}  id
//  * @param   {Object}         todo
//  * @returns {Promise}
//  */
// export function updateTodo(id, todo) {
//   return new Todo({ id }).save({ title: todo.title, completed: todo.completed });
// }

// /**
//  * Delete a todo.
//  *
//  * @param   {Number|String}  id
//  * @returns {Promise}
//  */
// export function deleteTodo(id) {
//   return new Todo({ id }).fetch().then((todo) => todo.destroy());
// }