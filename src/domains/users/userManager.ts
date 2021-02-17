import 'reflect-metadata';
import { Sequelize } from 'sequelize';
import { inject, injectable } from 'inversify';

import { User, UserModel, UserStatic } from '@server/domains/users/entity/user';
import { FindOne, UserType } from '@server/domains/users/entity/user.types';
import { TYPES } from '@server/commons/types';

@injectable()
export class UserManager {
    private userInstance: UserStatic;
    constructor(@inject(TYPES.DbConnector) connector: Sequelize) {
        this.userInstance = User(connector);
    }

    async create(user: UserType): Promise<UserType> {
        const userData: UserModel = this.userInstance.build(user);

        const result = await userData.save();
        return result.get({ pain: true });
    }

    async findOne(filter: FindOne): Promise<UserType> {
        const userData: UserType = await this.userInstance.findOne({
            where: {
                username: filter.username
            },
            raw: true
        });

        return userData;
    }
}
