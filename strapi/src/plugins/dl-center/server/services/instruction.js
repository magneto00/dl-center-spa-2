'use strict';

/**
 *  service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('plugin::dl-center.instruction', {
  async deleteInstructions() {
    await strapi.query('plugin::dl-center.instruction').deleteMany();

    const counter = await strapi.query('plugin::dl-center.instruction').count();

    // there should not be any instructions left
    if (counter !== 0) {
      throw new Error('Failed to delete instructions.');
    }
  },
  async createManyInstructions(instructions) {
    return strapi.db.query('plugin::dl-center.instruction').createMany({
      data: instructions,
    });
  },
});
