import createConfiguration from '../utils/config/createConfiguration';

import commons from './commons';

import envvar from './envvar.json';

const env = (process.env.NODE_ENV || 'local').toLowerCase();

const composeCommon = {
  ...commons,
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const envConfig = require(`./${env}.json`);
const config = createConfiguration({
  envvar: { ...envvar, env },
  envConfig,
  common: composeCommon,
});

export default config;
