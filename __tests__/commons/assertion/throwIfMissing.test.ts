import throwIfMissing from '@server/commons/assertion/throwIfMissing';
import errorCode from '@server/commons/errors/errorCode';

describe('throwIfMissing', () => {
    it('should throw if missing', () => {
        try {
            throwIfMissing(null, errorCode.USER_NOT_FOUND);
        } catch (e) {
            expect(e).toEqual(new Error('NOT_FOUND'));
        }
        expect.hasAssertions();
    });

    it('should not throw if present', () => {
        const result = throwIfMissing(1, errorCode.USER_NOT_FOUND);

        expect(result).toBeUndefined();
    });
});
