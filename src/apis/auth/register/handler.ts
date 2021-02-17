import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { UserService } from '@server/domains/users/userService';
import { TYPES } from '@server/commons/types';

import { RegisterResponse, RegisterRequest } from './type';

const registerHandler: Handler<RegisterResponse> = async (req) => {
    logger.debug(`${registerHandler.name} Login request`);
    const userService = myContainer.get<UserService>(TYPES.UserService);

    const { username, password, fullName } = req.body as RegisterRequest;

    const result = await userService.register({
        username,
        password,
        fullName
    });

    logger.debug(`${registerHandler.name} Login successful`);
    return {
        statusCode: HttpStatusCode.OK,
        body: {
            fullName: result.fullName,
            username: result.username
        }
    };
};

export default registerHandler;
