import 'reflect-metadata';

import { inject, injectable } from 'inversify';

import { UserType } from '@server/domains/users/entity/user.types';
import { TYPES } from '@server/commons/types';
import { UserManager } from '@server/domains/users/userManager';
import { generateHashPassword } from '@server/commons/utils/hashPassword';

@injectable()
export class UserService {
    constructor(@inject(TYPES.UserManager) private userManager: UserManager) {}

    async register(username: string, password: string): Promise<UserType> {
        // check exist user
        const hashPassword = generateHashPassword(password);
        const newUser = await this.userManager.create({
            username,
            password: hashPassword
        });

        return newUser;
    }
}
