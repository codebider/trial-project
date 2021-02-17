import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { UserType } from '@server/domains/users/entity/user.types';
import { TYPES } from '@server/commons/types';
import { UserManager } from '@server/domains/users/userManager';
import { checkHashPassword, generateHashPassword } from '@server/commons/utils/hashPassword';
import logger from '@server/commons/logger';
import errorCode from '@server/commons/errors/errorCode';
import { generateAuthToken } from '@server/commons/utils/jwt';
import { LoginResponse } from '@server/domains/users/type';
import throwIfMissing from '@server/commons/assertion/throwIfMissing';
import throwIfPresent from '@server/commons/assertion/throwIfPresent';

@injectable()
export class UserService {
    constructor(@inject(TYPES.UserManager) private userManager: UserManager) {}

    async register(params: { username: string; password: string; fullName: string }): Promise<UserType> {
        const { username, password, fullName } = params;
        const user = await this.userManager.findOne({ username });
        logger.debug(' Found user > ', user);
        throwIfPresent(user, errorCode.USER_EXISTED);

        const hashPassword = generateHashPassword(password);
        const newUser = await this.userManager.create({
            fullName,
            username,
            password: hashPassword
        });

        return newUser;
    }

    async login(username: string, password: string): Promise<LoginResponse> {
        // check exist user
        const user = await this.userManager.findOne({ username });
        logger.debug(' Find user ', user);

        throwIfMissing(user, errorCode.USER_NOT_FOUND);

        const isMatch = checkHashPassword(password, user.password);

        if (!isMatch) {
            throw errorCode.WRONG_PASSWORD;
        }

        const token = generateAuthToken({ id: user.id });

        return {
            token,
            fullName: user.fullName
        };
    }
}
