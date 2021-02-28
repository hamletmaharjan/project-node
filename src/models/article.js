import bookshelf from '../db';

const TABLE_NAME = 'articles';

/**
 * Article model.
 */
class Article extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }

}

export default Article;
