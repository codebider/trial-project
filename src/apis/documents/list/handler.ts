import { Handler, HttpStatusCode } from '@server/apis/type';
import logger from '@server/commons/logger';
import { myContainer } from '@server/commons/inversify.config';
import { TYPES } from '@server/commons/types';
import { DocumentService } from '@server/domains/documents/documentService';

import { CreateDocumentResponse, CreateDocumentRequest } from './type';

const createDocumentHandler: Handler<CreateDocumentResponse> = async (req) => {
    logger.debug(`${createDocumentHandler.name} Create document request`);
    const documentService = myContainer.get<DocumentService>(TYPES.DocumentService);

    const user = req.user;
    const {
        name,
        email,
        phoneNumber,
        address,
        ktpNumber,
        npwpNumber,
        passportNumber
    } = req.body as CreateDocumentRequest;

    const result = await documentService.create({
        userId: user.id,
        name,
        email,
        phoneNumber,
        address,
        ktpNumber,
        npwpNumber,
        passportNumber
    });

    logger.debug(`${createDocumentHandler.name} Create document successful`, result);
    return {
        statusCode: HttpStatusCode.OK,
        body: result
    };
};

export default createDocumentHandler;
