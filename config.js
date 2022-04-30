const { env } = process;

const TRUTHY = ['true', '1', 'yes', 'on', 't', 'y'];

module.exports = {
  APP: {
    PORT: env.PORT || 3000,
  },
  LOG: {
    JSON: env.LOG_JSON !== undefined ? TRUTHY.includes(env.LOG_JSON) : true,
    LEVEL: env.LOG_LEVEL || 'debug',
  },
};
