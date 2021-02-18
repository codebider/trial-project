import { myContainer } from '@server/commons/inversify.config';
import { DocumentService } from '@server/domains/documents/documentService';
import { TYPES } from '@server/commons/types';
import logger from '@server/commons/logger';

export const cleanUpDocument = async (): Promise<void> => {
    logger.info('CleanUpDocument request');
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const count = await documentService.cleanUp();
    logger.info('CleanUpDocument already clean up', count);
};
