'use strict';

/**
 * Location.js controller
 *
 * @description: A set of functions called "actions" for managing `Location`.
 */

module.exports = {

  /**
   * Retrieve locations.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.location.search(ctx.query);
    } else {
      return strapi.services.location.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a location.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.location.fetch(ctx.params);
  },

  /**
   * Count locations.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.location.count(ctx.query);
  },

  /**
   * Create a/an location.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.location.add(ctx.request.body);
  },

  /**
   * Update a/an location.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.location.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an location record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.location.remove(ctx.params);
  }
};
