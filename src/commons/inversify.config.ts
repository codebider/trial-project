import { Container } from 'inversify';
import { Sequelize } from 'sequelize';

import { getDbConnection } from '@server/connectors/mysqlConnector';
import { UserManager } from '@server/domains/users/userManager';
import { UserService } from '@server/domains/users/userService';

import { TYPES } from './types';

const db = getDbConnection();
const myContainer = new Container();
myContainer.bind<Sequelize>(TYPES.DbConnector).toConstantValue(db);
myContainer.bind<UserManager>(TYPES.UserManager).to(UserManager);
myContainer.bind<UserService>(TYPES.UserService).to(UserService);

export { myContainer };
