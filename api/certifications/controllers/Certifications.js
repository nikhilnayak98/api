'use strict';

/**
 * Certifications.js controller
 *
 * @description: A set of functions called "actions" for managing `Certifications`.
 */

module.exports = {

  /**
   * Retrieve certifications.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.certifications.search(ctx.query);
    } else {
      return strapi.services.certifications.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a certification.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.certifications.fetch(ctx.params);
  },

  /**
   * Count certifications.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.certifications.count(ctx.query);
  },

  /**
   * Create a/an certification.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.certifications.add(ctx.request.body);
  },

  /**
   * Update a/an certification.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.certifications.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an certification record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.certifications.remove(ctx.params);
  }
};
