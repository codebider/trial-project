import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { TYPES } from '@server/commons/types';
import { DocumentService } from '@server/domains/documents/documentService';

import { ListDocumentResponse } from './type';

const listDocumentHandler: Handler<ListDocumentResponse> = async (req) => {
    logger.debug(`${listDocumentHandler.name} List document request`);
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const user = req.user;

    const result = await documentService.list(user.id);

    logger.debug(`${listDocumentHandler.name} List document successful`, result);
    return {
        statusCode: HttpStatusCode.OK,
        body: result
    };
};

export default listDocumentHandler;
