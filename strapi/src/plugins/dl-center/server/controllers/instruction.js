'use strict';

/**
 *   controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::dl-center.instruction', {
  async findAll(ctx) {
    ctx.body = await strapi
      .plugin('dl-center')
      .service('instruction')
      .findAll(ctx.query);
  },
  async deleteAll(ctx) {
    try {
      await strapi
        .plugin('dl-center')
        .service('instruction')
        .deleteInstructions();

      ctx.body = { message: 'ok' };
    } catch (e) {
      ctx.badRequest('Failed to create instructions.', {
        message: e.message,
      });
    }
  },
  async createManyInstructions(ctx) {
    try {
      const data = ctx.request.body;
      const affected = await strapi
        .plugin('dl-center')
        .service('instruction')
        .createManyInstructions(data);

      ctx.body = { instructions: affected };
    } catch (e) {
      ctx.badRequest('Failed to create instructions.', {
        message: e.message,
      });
    }
  },
});
