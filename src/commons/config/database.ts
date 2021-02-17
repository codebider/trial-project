import config from './index';

const configDB = config.get('db');

export const development = configDB;
export const production = configDB;
export const test = configDB;
