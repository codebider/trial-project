import { Handler, HttpStatusCode } from '@server/apis/type';
import { LoginRequest, LoginResponse } from '@server/apis/auth/login/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { UserService } from '@server/domains/users/userService';
import { TYPES } from '@server/commons/types';

const loginHandler: Handler<LoginResponse> = async (req) => {
    logger.info(`${loginHandler.name} Login request`);
    const userService = myContainer.get<UserService>(TYPES.UserService);

    const { username, password } = req.body as LoginRequest;

    const result = await userService.login(username, password);
    console.log(result);
    return {
        statusCode: HttpStatusCode.CREATED,
        body: {
            token: 'token'
        }
    };
};

export default loginHandler;
