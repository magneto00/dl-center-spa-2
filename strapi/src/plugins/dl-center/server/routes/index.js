module.exports = {
  instruction: {
    type: 'admin', // TODO ??? is it a real option?
    routes: [
      {
        method: 'GET',
        path: '/',
        handler: 'instruction.index',
        config: {
          policies: [],
          auth: false,
        },
      },
      {
        method: 'DELETE',
        path: '/deleteAll',
        handler: 'instruction.deleteAll',
        config: {
          policies: [],
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/instructions',
        handler: 'instruction.createManyInstructions',
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
};
