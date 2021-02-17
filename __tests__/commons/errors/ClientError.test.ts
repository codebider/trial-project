import { ClientError, newClientError } from '@server/commons/errors/ClientError';

describe('ClientError', () => {
    it('should return error data', () => {
        const appError = new ClientError({
            statusCode: 400,
            errorId: '1001',
            userMessage: 'Bad Request',
            internalMessage: 'Invalid rate number'
        });

        expect(appError.toResponse()).toEqual({
            errorId: '1001',
            message: 'Bad Request'
        });

        expect(appError.getStatusCode()).toEqual(400);
    });

    it('should return error data with no userMessage', () => {
        const appError = new ClientError({
            statusCode: 400,
            errorId: '1001',
            internalMessage: 'Invalid rate number'
        });

        expect(appError.toResponse()).toEqual({
            errorId: '1001',
            message: 'Invalid request'
        });
    });

    it('should return error data with default status code', () => {
        const appError = newClientError({
            errorId: '1001',
            internalMessage: 'Invalid rate number'
        });

        expect(appError.getStatusCode()).toEqual(400);
    });
});
