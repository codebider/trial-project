import { startJobs } from '@server/jobs/index';
describe('startJobs', () => {
    it('should call with correct params', async () => {
        const result = await startJobs();
        expect(result).toBeDefined();
        expect(result()).toBeUndefined();
    });
});
