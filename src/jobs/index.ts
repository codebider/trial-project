import cron from 'node-cron';

import logger from '@server/commons/logger';
import { cleanUpDocument } from '@server/jobs/cleanUpDocument';

// TODO: Should move to another service or persist data to mongod or redis to void duplicated jobs
export const startJobs = (): Function => {
    logger.debug('Start Jobs Now...');

    // Run every mid-day
    const task = cron.schedule('0 0 * * *', async () => {
        logger.log('cleanUpDocument trigger!');
        await cleanUpDocument();
    });

    return () => {
        logger.debug('Stop Jobs Now...');
        task.stop();
    };
};
