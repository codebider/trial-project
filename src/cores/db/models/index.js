import fs from 'fs';
import path from 'path';
import {DataTypes, Sequelize} from 'sequelize';

import logger from '@server/commons/logger';
import config from '../../config';

const configDB = config.get('db');

const basename = path.basename(__filename);
const { username, database, password, ...options } = configDB;
const db = {};
const models = {};
const sequelize = new Sequelize(database, username, password, {
  ...options,
  logging: message => logger.debug(message),
});

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach(file => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require(`./${file}`);
    const data = model(sequelize, DataTypes);
    models[data.name] = data;
  });

// Sync associate
Object.keys(models).forEach(key => {
  const item = models[key];
  if (item.associate) {
    item.associate(models);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
