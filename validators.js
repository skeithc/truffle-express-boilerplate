const { param, body } = require('express-validator');

module.exports = {
  list: [],
  get: [
    param('tokenId').exists().isInt().toInt(),
  ],
  update: [
    param('tokenId').exists().isInt().toInt(),
    body('name').exists().isString().isLength({ min: 1, max: 255 }),
    body('description').exists().isString().isLength({ min: 1, max: 255 }),
  ],
};
