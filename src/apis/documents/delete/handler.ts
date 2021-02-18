import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { TYPES } from '@server/commons/types';
import { DocumentService } from '@server/domains/documents/documentService';

const deleteDocumentHandler: Handler<void> = async (req) => {
    logger.debug(`${deleteDocumentHandler.name} Delete document request`);
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const user = req.user;
    const { id: documentId } = req.params;

    const result = await documentService.delete(user.id, documentId);

    logger.debug(`${deleteDocumentHandler.name} Delete document successful`, result);
    return {
        statusCode: HttpStatusCode.NO_CONTENT
    };
};

export default deleteDocumentHandler;
