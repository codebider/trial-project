import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { DocumentData, DocumentType } from '@server/domains/documents/entity/document.types';
import { TYPES } from '@server/commons/types';
import { DocumentManager } from '@server/domains/documents/documentManager';
import { UpdateBy } from '@server/domains/documents/type';
import errorCode from '@server/commons/errors/errorCode';
import throwIfMissing from '@server/commons/assertion/throwIfMissing';

@injectable()
export class DocumentService {
    constructor(@inject(TYPES.DocumentManager) private documentManager: DocumentManager) {}

    async create(params: DocumentType): Promise<DocumentData> {
        const { userId, ktpNumber, passportNumber } = params;
        const existed = await this.documentManager.checkExistedByIdentityNumber({ userId, ktpNumber, passportNumber });
        if (existed) {
            throw errorCode.DOCUMENT_DUPLICATED_IDENTITY_NUMBER;
        }
        const newDoc = await this.documentManager.create(params);

        return newDoc;
    }

    async update(userId: number, documentId: number, params: UpdateBy): Promise<DocumentData> {
        const { ktpNumber, passportNumber } = params;
        const existed = await this.documentManager.checkExistedByIdentityNumber({
            userId,
            ktpNumber,
            passportNumber,
            documentId
        });
        if (existed) {
            throw errorCode.DOCUMENT_DUPLICATED_IDENTITY_NUMBER;
        }

        console.log(userId, documentId, params);
        await this.documentManager.updateById(userId, documentId, params);

        const newDoc = await this.documentManager.findOne({ id: documentId });
        return newDoc;
    }

    async delete(userId: number, documentId: number): Promise<DocumentData> {
        const count = await this.documentManager.count({ userId, id: documentId });
        if (count === 0) {
            throw errorCode.DOCUMENT_NOT_FOUND;
        }

        await this.documentManager.deleteById(userId, documentId);

        const newDoc = await this.documentManager.findOne({ id: documentId });
        return newDoc;
    }

    async list(userId: number): Promise<DocumentData[]> {
        const documents: DocumentData[] = await this.documentManager.findAll({
            userId
        });

        return documents;
    }

    async getOne(userId: number, identityNumber: string): Promise<DocumentData> {
        const document = await this.documentManager.findOneByIdentityNumber(userId, identityNumber);

        throwIfMissing(document, errorCode.DOCUMENT_NOT_FOUND);

        return document;
    }

    async getByDocumentId(userId: number, documentId: number): Promise<DocumentData> {
        const document = await this.documentManager.findOne({
            userId,
            id: documentId
        });

        throwIfMissing(document, errorCode.DOCUMENT_NOT_FOUND);

        return document;
    }
}
