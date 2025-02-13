import commons from './commons';
import envvar from './envvar.json';
import development from './development.json';
import production from './production.json';
import test from './test.json';

import createConfiguration, { Configuration } from '../utils/createConfiguration';

const env = (process.env.NODE_ENV || 'development').toLowerCase();

const composeCommon = {
    ...commons
};

const Envs = {
    development,
    production,
    test
};

const envConfig = Envs[env];
const config: Configuration = createConfiguration({
    envvar: { ...envvar, env },
    envConfig,
    common: composeCommon
});

export default config;
