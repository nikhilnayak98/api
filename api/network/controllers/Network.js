'use strict';

/**
 * Network.js controller
 *
 * @description: A set of functions called "actions" for managing `Network`.
 */

module.exports = {

  /**
   * Retrieve network.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.network.search(ctx.query);
    } else {
      return strapi.services.network.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a network.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.network.fetch(ctx.params);
  },

  /**
   * Count network.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.network.count(ctx.query);
  },

  /**
   * Create a/an network.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.network.add(ctx.request.body);
  },

  /**
   * Update a/an network.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.network.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an network record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.network.remove(ctx.params);
  }
};
