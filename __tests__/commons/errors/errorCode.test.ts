import errorCode from '@server/commons/errors/errorCode';

describe('errorCode', () => {
    it('should throw correct message for USER_NOT_FOUND', () => {
        expect(errorCode.USER_NOT_FOUND).toEqual(new Error('NOT_FOUND'));
    });

    it('should throw correct message for WRONG_PASSWORD', () => {
        expect(errorCode.WRONG_PASSWORD).toEqual(new Error('WRONG_PASSWORD'));
    });

    it('should throw correct message for WRONG_PASSWORD', () => {
        expect(errorCode.VALIDATOR_ERROR('something wrong')).toEqual(new Error('something wrong'));
    });
});
