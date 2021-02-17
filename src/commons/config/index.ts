import createConfiguration from '../utils/createConfiguration';

import commons from './commons';

import envvar from './envvar.json';
import development from './development.json';
import production from './production.json';
import test from './test.json';

const env = (process.env.NODE_ENV || 'development').toLowerCase();

const composeCommon = {
  ...commons,
};

const Envs = {
  development,
  production,
  test,
};

const envConfig = Envs[env];
const config = createConfiguration({
  envvar: { ...envvar, env },
  envConfig,
  common: composeCommon,
});

export default config;
