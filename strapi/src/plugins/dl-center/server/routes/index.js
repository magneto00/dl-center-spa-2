module.exports = {
  instruction: {
    type: 'admin', // TODO ??? is it a real option?
    routes: [
      {
        // example: http://localhost:1337/dl-center/instructions?filters[device][$eq]=IFU Skabelon&filters[country][$eq]=Afghanistan
        method: 'GET',
        path: '/instructions',
        handler: 'instruction.findAll',
        config: {
          policies: [],
          auth: false,
        },
      },
      {
        method: 'DELETE',
        path: '/instructions',
        handler: 'instruction.deleteAll',
        config: {
          policies: [],
        },
      },
      {
        method: 'POST',
        path: '/instructions',
        handler: 'instruction.createManyInstructions',
        config: {
          policies: [],
        },
      },
      {
        method: 'GET',
        path: '/instructions/options',
        handler: 'instruction.getOptions',
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
};
