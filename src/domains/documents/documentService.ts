import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { DocumentData, DocumentType } from '@server/domains/documents/entity/document.types';
import { TYPES } from '@server/commons/types';
import { DocumentManager } from '@server/domains/documents/documentManager';

@injectable()
export class DocumentService {
    constructor(@inject(TYPES.DocumentManager) private documentManager: DocumentManager) {}

    async create(params: DocumentType): Promise<DocumentData> {
        // const user = await this.documentManager.findOne({ userId, ktpNumber });
        // logger.debug(' Found user > ', user);
        // throwIfPresent(user, errorCode.USER_EXISTED);

        const newUser = await this.documentManager.create(params);

        return newUser;
    }
}
