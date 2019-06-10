'use strict';

/**
 * Activities.js controller
 *
 * @description: A set of functions called "actions" for managing `Activities`.
 */

module.exports = {

  /**
   * Retrieve activities.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.activities.search(ctx.query);
    } else {
      return strapi.services.activities.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a activity.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.activities.fetch(ctx.params);
  },

  /**
   * Count activities.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.activities.count(ctx.query);
  },

  /**
   * Create a/an activity.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.activities.add(ctx.request.body);
  },

  /**
   * Update a/an activity.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.activities.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an activity record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.activities.remove(ctx.params);
  }
};
