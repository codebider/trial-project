import { AppError } from '@server/commons/errors/AppError';

const DEFAULT_ERROR = 'Invalid request';

interface ClientErrorType {
    errorId: string;
    userMessage?: string;
    internalMessage: string;
    statusCode?: number;
}

export class ClientError extends AppError {
    constructor(params: ClientErrorType) {
        const userMessage = params.userMessage || DEFAULT_ERROR;
        const statusCode = params.statusCode || 400;

        super({ ...params, userMessage, statusCode });
    }
}

export const newClientError = (params: ClientErrorType): ClientError => new ClientError(params);
