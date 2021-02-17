import { ClientError, newClientError } from '@server/commons/errors/ClientError';
import { HttpStatusCode } from '@server/apis/type';

const errorCode = {
    get USER_NOT_FOUND(): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.NOT_FOUND,
            errorId: 'D001',
            userMessage: 'User Not Found',
            internalMessage: 'NOT_FOUND'
        });
    },
    get WRONG_PASSWORD(): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.BAD_REQUEST,
            errorId: 'D002',
            userMessage: 'Wrong password',
            internalMessage: 'WRONG_PASSWORD'
        });
    },
    VALIDATOR_ERROR(message: string): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.BAD_REQUEST,
            errorId: 'D003',
            userMessage: message,
            internalMessage: message
        });
    }
};

export default errorCode;
