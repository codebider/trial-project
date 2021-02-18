import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { TYPES } from '@server/commons/types';
import { DocumentService } from '@server/domains/documents/documentService';
import { DocumentData } from '@server/domains/documents/entity/document.types';

const getOneDocumentHandler: Handler<DocumentData> = async (req) => {
    logger.debug(`${getOneDocumentHandler.name} Create document request`);
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const user = req.user;
    const { identityNumber } = req.query;

    const result = await documentService.getOne(user.id, identityNumber as string);

    logger.debug(`${getOneDocumentHandler.name} Create document successful`, result);
    return {
        statusCode: HttpStatusCode.OK,
        body: result
    };
};

export default getOneDocumentHandler;
