'use strict';

/**
 * Details.js controller
 *
 * @description: A set of functions called "actions" for managing `Details`.
 */

module.exports = {

  /**
   * Retrieve details.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.details.search(ctx.query);
    } else {
      return strapi.services.details.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a detail.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.details.fetch(ctx.params);
  },

  /**
   * Count details.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.details.count(ctx.query);
  },

  /**
   * Create a/an detail.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.details.add(ctx.request.body);
  },

  /**
   * Update a/an detail.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.details.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an detail record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.details.remove(ctx.params);
  }
};
