import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { TYPES } from '@server/commons/types';
import { DocumentService } from '@server/domains/documents/documentService';
import { DocumentData } from '@server/domains/documents/entity/document.types';

const getOneDocumentHandler: Handler<DocumentData> = async (req) => {
    logger.debug(`${getOneDocumentHandler.name} Get one document request`);
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const user = req.user;
    const { id: documentId } = req.params;

    const result = await documentService.getByDocumentId(user.id, documentId);

    logger.debug(`${getOneDocumentHandler.name} Get one document successful`, result);
    return {
        statusCode: HttpStatusCode.OK,
        body: result
    };
};

export default getOneDocumentHandler;
