import isNil from 'lodash/isNil';
import * as nconf from 'nconf';

const noRecursion = (env): boolean => {
    return env.env || typeof env === 'string';
};

const getEnvValue = (env): string => {
    if (typeof env === 'object') {
        return process.env[env.env] || env.default;
    }
    return process.env[env];
};

const buildOverride = (envVar, base = {}): object => {
    return Object.keys(envVar).reduce(
        (conf, key) => {
            const env = envVar[key];
            const envVal = noRecursion(env) ? getEnvValue(env) : buildOverride(env, conf[key] || {});
            if (!isNil(envVal)) {
                // eslint-disable-next-line no-param-reassign
                conf[key] = envVal;
            }
            return conf;
        },
        { ...base }
    );
};

const createConfiguration = ({ envvar = {}, envConfig = {}, common = {} }): unknown => {
    const env = buildOverride(envvar);
    const nc = nconf
        .overrides(env)
        .add('envconfig', { type: 'literal', ...envConfig })
        .add('common', { type: 'literal', ...common });
    return {
        get: (name) => nc.get(name)
    };
};

export default createConfiguration;
