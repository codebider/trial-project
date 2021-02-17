import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { TYPES } from '@server/commons/types';
import { DocumentService } from '@server/domains/documents/documentService';

import { UpdateDocumentResponse, UpdateDocumentRequest } from './type';

const updateDocumentHandler: Handler<UpdateDocumentResponse> = async (req) => {
    logger.debug(`${updateDocumentHandler.name} Create document request`);
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const user = req.user;
    const { id: documentId } = req.params;
    const {
        name,
        email,
        phoneNumber,
        address,
        ktpNumber,
        npwpNumber,
        passportNumber
    } = req.body as UpdateDocumentRequest;

    const result = await documentService.update(user.id, documentId, {
        name,
        email,
        phoneNumber,
        address,
        ktpNumber,
        npwpNumber,
        passportNumber
    });

    logger.debug(`${updateDocumentHandler.name} Create document successful`, result);
    return {
        statusCode: HttpStatusCode.OK,
        body: result
    };
};

export default updateDocumentHandler;
