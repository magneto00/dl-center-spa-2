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
        },
      },
      {
        method: 'DELETE',
        path: '/deleteAll',
        handler: 'instruction.deleteAll',
        config: {
          policies: [],
        },
      },
      {
        method: 'POST',
        path: '/create',
        handler: 'instruction.create',
        config: {
          policies: [],
        },
      },
    ],
  },
};
