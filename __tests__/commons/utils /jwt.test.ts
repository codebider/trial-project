import { generateAuthToken, verifyToken } from '@server/commons/utils/jwt';

describe('jwt', () => {
    it('should generate and check correct token', async () => {
        const id = 221232;

        const token = generateAuthToken({ id });
        expect(token).toBeDefined();

        const decoded = await verifyToken(token);
        expect(decoded.id).toEqual(id);
    });

    it('should throw error for invalid case', async () => {
        await expect(verifyToken('123213123123123')).rejects.toThrow('jwt malformed');
    });
});
