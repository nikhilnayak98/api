'use strict';

/**
 * Awards.js controller
 *
 * @description: A set of functions called "actions" for managing `Awards`.
 */

module.exports = {

  /**
   * Retrieve awards.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.awards.search(ctx.query);
    } else {
      return strapi.services.awards.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a award.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.awards.fetch(ctx.params);
  },

  /**
   * Count awards.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.awards.count(ctx.query);
  },

  /**
   * Create a/an award.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.awards.add(ctx.request.body);
  },

  /**
   * Update a/an award.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.awards.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an award record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.awards.remove(ctx.params);
  }
};
