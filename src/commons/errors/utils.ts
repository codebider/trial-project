import { AppError } from '@server/commons/errors/AppError';
import { HttpStatusCode } from '@server/apis/type';

const extractInternalMessage = (err: any): string => {
    if (typeof err === 'string') {
        return err;
    }

    return JSON.stringify({
        code: err['code'],
        name: err['name'],
        message: err['message'],
        stack: err['stack']
    });
};

export const getUnhandledError = (err: any): AppError => {
    return new AppError({
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
        errorId: 'D0000',
        internalMessage: extractInternalMessage(err),
        userMessage: 'Something wrong'
    });
};
