import config from '@server/cores/config/index';

const configDB = config.get('db');

module.exports = {
  local: configDB,
  production: configDB,
};
