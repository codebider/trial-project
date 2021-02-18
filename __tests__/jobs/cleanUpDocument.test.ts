const documentService = {
    cleanUp: jest.fn().mockReturnValue(1)
};
import { cleanUpDocument } from '@server/jobs/cleanUpDocument';
jest.mock('@server/commons/inversify.config', () => ({
    myContainer: {
        get: jest.fn().mockReturnValue(documentService)
    }
}));
describe('cleanUpDocument', () => {
    it('should call with correct params', async () => {
        const result = await cleanUpDocument();
        expect(result).toBeUndefined();
        expect(documentService.cleanUp).toBeCalledWith();
        expect(documentService.cleanUp).toBeCalledTimes(1);
    });
});
