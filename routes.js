const controller = require('./controller');
const validators = require('./validators');
const { validate } = require('./helpers/validator');

module.exports = {
  setup(app) {
    app.get('/list', validators.list, validate, controller.list);

    app.get('/:tokenId', validators.get, validate, controller.get);

    app.patch('/:tokenId', validators.update, validate, controller.update);
  },
};
