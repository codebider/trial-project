import supertest from 'supertest';
import newServer from '@server/server';

describe('Server', () => {
    let agent: any = null;
    beforeAll(() => {
        const app: any = newServer();
        agent = supertest.agent(app);
    });
    
    afterAll(() => {
        agent.close();
    });

    it('should pass health check',  (done) => {
        agent.get('/health').expect('"Document Management API"', done);
    });
});
