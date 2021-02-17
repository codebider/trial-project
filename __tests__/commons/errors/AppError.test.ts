import { AppError } from '@server/commons/errors/AppError';

describe('AppError', () => {
    it('should return error data', () => {
        const appError = new AppError({
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
        const appError = new AppError({
            statusCode: 400,
            errorId: '1001',
            internalMessage: 'Invalid rate number'
        });

        expect(appError.toResponse()).toEqual({
            errorId: '1001',
            message: 'Invalid rate number'
        });
    });

    it('should return error data with default status code', () => {
        const appError = new AppError({
            errorId: '1001',
            internalMessage: 'Invalid rate number'
        });

        expect(appError.getStatusCode()).toEqual(500);
    });
});
