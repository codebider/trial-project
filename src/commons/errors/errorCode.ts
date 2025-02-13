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
    },
    get USER_EXISTED(): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.CONFLICT,
            errorId: 'D004',
            userMessage: 'User existed',
            internalMessage: 'User existed'
        });
    },
    get UN_AUTHORIZED(): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.UNAUTHORIZED,
            errorId: 'D005',
            userMessage: 'unauthorized',
            internalMessage: 'UN_AUTHORIZED'
        });
    },
    get DOCUMENT_NOT_FOUND(): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.NOT_FOUND,
            errorId: 'D006',
            userMessage: 'Document Not Found',
            internalMessage: 'Document Not Found'
        });
    },
    get DOCUMENT_DUPLICATED_IDENTITY_NUMBER(): ClientError {
        return newClientError({
            statusCode: HttpStatusCode.CONFLICT,
            errorId: 'D007',
            userMessage: 'Document Duplicated',
            internalMessage: 'Document Duplicated'
        });
    }
};

export default errorCode;
