'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('dl-center')
      .service('myService')
      .getWelcomeMessage();
  },
};
