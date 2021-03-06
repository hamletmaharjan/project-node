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

/**
 * @param  {Number|String} userId
 * @param  {Object} article
 */
export function createArticle(userId, article) {
  return new Article({ 
    title: article.title,
    user_id: userId,
    description: article.description,
    image: article.image
  }).save();
}





/**
 * Update an article.
 *
 * @param   {Number|String}  id
 * @param   {Object}         article
 * @returns {Promise}
 */
export function updateArticle(id, article) {
  return new Article({ id }).save({ title: article.title, description: article.description, image:article.image });
}

/**
 * Delete an article.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteArticle(id) {
  return new Article({ id }).fetch().then((article) => article.destroy());
}