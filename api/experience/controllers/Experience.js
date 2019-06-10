'use strict';

/**
 * Experience.js controller
 *
 * @description: A set of functions called "actions" for managing `Experience`.
 */

module.exports = {

  /**
   * Retrieve experience.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.experience.search(ctx.query);
    } else {
      return strapi.services.experience.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a experience.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.experience.fetch(ctx.params);
  },

  /**
   * Count experience.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.experience.count(ctx.query);
  },

  /**
   * Create a/an experience.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.experience.add(ctx.request.body);
  },

  /**
   * Update a/an experience.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.experience.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an experience record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.experience.remove(ctx.params);
  }
};
