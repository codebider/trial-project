import throwIfPresent from '@server/commons/assertion/throwIfPresent';
import errorCode from '@server/commons/errors/errorCode';

describe('throwIfPresent', () => {
    it('should throw if present', () => {
        try {
            throwIfPresent(2, errorCode.USER_NOT_FOUND);
        } catch (e) {
            expect(e).toEqual(new Error('NOT_FOUND'));
        }
        expect.hasAssertions();
    });

    it('should not throw if missing', () => {
        const result = throwIfPresent(null, errorCode.USER_NOT_FOUND);

        expect(result).toBeUndefined();
    });
});
