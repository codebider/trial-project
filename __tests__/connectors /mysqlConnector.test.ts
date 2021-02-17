import { Sequelize } from 'sequelize';

import { getDbConnection } from '@server/connectors/mysqlConnector';

jest.mock('sequelize');
describe('getDbConnection', () => {
    it('should return connection', async () => {
        const connection = getDbConnection();
        expect(connection).toBeDefined();
        expect(connection).toBeInstanceOf(Sequelize);
    });
});
