import { development, test, production } from '@server/commons/config/database';

describe('database', () => {
    it('should return connect data', async () => {
        const configData = {
            database: 'nux_db_test',
            dialect: 'postgres',
            host: 'localhost',
            password: 'password123',
            port: 5432,
            username: 'postgres'
        };
        expect(development).toEqual(configData);
        expect(test).toEqual(configData);
        expect(production).toEqual(configData);
    });
});
