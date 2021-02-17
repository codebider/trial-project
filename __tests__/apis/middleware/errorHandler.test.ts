import errorHandler from '@server/apis/middleware/errorHandler';
import errorCode from '@server/commons/errors/errorCode';

describe('errorHandler', () => {
    it('should throw error for app error', async () => {
        const error = errorCode.USER_NOT_FOUND;
        const unknow = null as any;
        const statusFn = jest.fn();
        const sendFn = jest.fn();
        const res = {
            status: statusFn.mockReturnValue({
                send: sendFn
            })
        };
        errorHandler(error, unknow, res as any, unknow);
        expect(statusFn).toBeCalledTimes(1);
        expect(statusFn).toBeCalledWith(404);
        expect(sendFn).toBeCalledTimes(1);
        expect(sendFn).toBeCalledWith({ errorId: 'D001', message: 'User Not Found' });
    });

    it('should throw error for unexpected error', async () => {
        const error = new Error('Something wrong');
        const unknow = null as any;
        const statusFn = jest.fn();
        const sendFn = jest.fn();
        const res = {
            status: statusFn.mockReturnValue({
                send: sendFn
            })
        };
        errorHandler(error, unknow, res as any, unknow);
        expect(statusFn).toBeCalledTimes(1);
        expect(statusFn).toBeCalledWith(500);
        expect(sendFn).toBeCalledTimes(1);
        expect(sendFn).toBeCalledWith({ errorId: 'D0000', message: 'Something wrong' });
    });
});
