import Boom from '@hapi/boom';

import User from '../models/user';

/**
 * @param  {Object} credentials
 */
export function getUser(credentials) {
  return new User({ email: credentials.email })
    .fetch()
    .then((user) => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}
