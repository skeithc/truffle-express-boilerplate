const winston = require('winston');
const { formatWithOptions } = require('util');
const config = require('../config');

const { format, transports } = winston;

const formatOptions = { colors: true, depth: 4 };

module.exports = winston.createLogger({
  level: config.LOG.LEVEL,
  format: config.LOG.JSON
    ? format.combine(
      format.timestamp(),
      format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
      format.json(),
    )
    : format.combine(
      format((info) => ({ ...info, message: formatWithOptions(formatOptions, info.message) }))(),
      format.timestamp(),
      format.padLevels(),
      format.colorize(),
      format.printf(({
        level, message, label, timestamp, ...rest
      }) => {
        const params = rest[Symbol.for('splat')];
        const paramsString = (params || []).map((p) => formatWithOptions(formatOptions, p)).join(' ');
        return `${timestamp} ${level}: ${message} ${paramsString}`;
      }),
    ),
  transports: [new transports.Console({ handleExceptions: true })],
});
