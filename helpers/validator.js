const { validationResult } = require('express-validator');
const logger = require('./logger');

module.exports = {
  validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.debug('Validation errors:', errors.array());
      return res.status(422).json({ errors: errors.array() });
    }

    return next();
  },
};
