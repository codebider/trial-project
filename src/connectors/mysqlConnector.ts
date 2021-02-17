import {Options, Sequelize} from 'sequelize';
import config from '@server/commons/config';
import logger from '@server/commons/logger';

export const getDbConnection = () => {
  const dbConfigs: Options = config.get('db');

  logger.debug('Connect to ', dbConfigs.database);

  const db = new Sequelize(dbConfigs.database as string, dbConfigs.username as string, dbConfigs.password, dbConfigs);

  return db;
};
