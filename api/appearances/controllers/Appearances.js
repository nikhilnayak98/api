'use strict';

/**
 * Appearances.js controller
 *
 * @description: A set of functions called "actions" for managing `Appearances`.
 */

module.exports = {

  /**
   * Retrieve appearances.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.appearances.search(ctx.query);
    } else {
      return strapi.services.appearances.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a appearance.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.appearances.fetch(ctx.params);
  },

  /**
   * Count appearances.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.appearances.count(ctx.query);
  },

  /**
   * Create a/an appearance.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.appearances.add(ctx.request.body);
  },

  /**
   * Update a/an appearance.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.appearances.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an appearance record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.appearances.remove(ctx.params);
  }
};
