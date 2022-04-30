const controller = require('./controller');

module.exports = {
  setup(app) {
    app.get('/list', controller.list);

    app.get('/:tokenId', controller.get);

    app.patch('/:tokenId', controller.update);
  },
};
