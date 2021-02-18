import { Op } from 'sequelize';

import { QueryBuilder } from '@server/commons/utils/queryBuilder';

describe('QueryBuilder', () => {
    it('should build correct data', async () => {
        const query = new QueryBuilder()
            .where('userId', 'userId')
            .whereNotEqual('id', 'documentId')
            .setRaw(true)
            .setLimit(10)
            .setOrder('id', 'desc')
            .whereIn('name', ['1', '2'])
            .whereOr({
                ktpNumber: 1,
                passportNumber: 2
            })
            .build();

        expect(query).toEqual({
            limit: 10,
            order: [['id', 'desc']],
            raw: true,
            where: {
                id: {
                    [Op.ne]: 'documentId'
                },
                name: {
                    [Op.in]: ['1', '2']
                },
                userId: 'userId',
                [Op.or]: {
                    ktpNumber: 1,
                    passportNumber: 2
                }
            }
        });
    });
});
