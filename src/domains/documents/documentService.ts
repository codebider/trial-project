import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { DocumentData, DocumentType } from '@server/domains/documents/entity/document.types';
import { TYPES } from '@server/commons/types';
import { DocumentManager } from '@server/domains/documents/documentManager';
import { UpdateBy } from '@server/domains/documents/type';

@injectable()
export class DocumentService {
    constructor(@inject(TYPES.DocumentManager) private documentManager: DocumentManager) {}

    async create(params: DocumentType): Promise<DocumentData> {
        // const user = await this.documentManager.findOne({ userId, ktpNumber });
        // logger.debug(' Found user > ', user);
        // throwIfPresent(user, errorCode.USER_EXISTED);

        const newDoc = await this.documentManager.create(params);

        return newDoc;
    }

    async update(userId: number, documentId: number, params: UpdateBy): Promise<DocumentData> {
        await this.documentManager.updateById(userId, documentId, params);

        const newDoc = await this.documentManager.findOne({ id: documentId });
        return newDoc;
    }
}
