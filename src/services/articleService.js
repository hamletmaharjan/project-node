import Boom from '@hapi/boom';

import Article from '../models/article';

/**
 * Get all articles.
 *
 * @returns {Promise}
 */
export function getAllArticles() {
  return Article.fetchAll()
  .then((articles)=> {
    let x = JSON.parse(JSON.stringify(articles));
    let result = x.map(function (article) { 
        article.image = "/images/" + article.image;
        return article;
    });
    return result;
  });
}

/**
 * Get an article.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getArticle(id) {
  return new Article({ id })
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
// export function createTodo(todo) {
//   return new Todo({ title: todo.title, user_id: todo.user_id, completed: todo.completed }).save();
// }

// /**
//  * Update a todo.
//  *
//  * @param   {Number|String}  id
//  * @param   {Object}         todo
//  * @returns {Promise}
//  */
// export function updateTodo(id, todo) {
//   return new Todo({ id }).save({ title: todo.title, user_id: todo.user_id, completed: todo.completed });
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
