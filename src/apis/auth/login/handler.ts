import { Handler, HttpStatusCode } from '@server/apis/type';
import { LoginResponse } from '@server/apis/auth/login/type';
import logger from '@server/commons/logger';

const loginHandler: Handler<LoginResponse> = async (req) => {
    logger.info(`${loginHandler.name} Login request`);

    return {
        statusCode: HttpStatusCode.CREATED,
        body: {
            token: 'token'
        }
    };
};

export default loginHandler;
