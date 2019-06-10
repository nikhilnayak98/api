'use strict';

/**
 * Education.js controller
 *
 * @description: A set of functions called "actions" for managing `Education`.
 */

module.exports = {

  /**
   * Retrieve education.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.education.search(ctx.query);
    } else {
      return strapi.services.education.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a education.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.education.fetch(ctx.params);
  },

  /**
   * Count education.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.education.count(ctx.query);
  },

  /**
   * Create a/an education.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.education.add(ctx.request.body);
  },

  /**
   * Update a/an education.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.education.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an education record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.education.remove(ctx.params);
  }
};
