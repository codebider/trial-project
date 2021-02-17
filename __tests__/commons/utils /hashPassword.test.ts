import { generateHashPassword, checkHashPassword } from '@server/commons/utils/hashPassword';

describe('hashPassword', () => {
    it('should generate and check correct hash password', () => {
        const password = 'p@ssword';

        const hashPassword = generateHashPassword(password);
        expect(hashPassword).toBeDefined();

        const isMatch = checkHashPassword(password, hashPassword);
        expect(isMatch).toBeTruthy();
    });
});
