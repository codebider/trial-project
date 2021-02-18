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
        const newDoc = await this.documentManager.create(params);

        return newDoc;
    }

    async update(userId: number, documentId: number, params: UpdateBy): Promise<DocumentData> {
        await this.documentManager.updateById(userId, documentId, params);

        const newDoc = await this.documentManager.findOne({ id: documentId });
        return newDoc;
    }

    async delete(userId: number, documentId: number): Promise<DocumentData> {
        await this.documentManager.deleteById(userId, documentId);

        const newDoc = await this.documentManager.findOne({ id: documentId });
        return newDoc;
    }

    async list(userId: number): Promise<DocumentData> {
        const documents = await this.documentManager.findAll({
            userId
        });

        return documents;
    }

    async getOne(userId: number, name?: string, email?: string): Promise<DocumentData> {
        const documents = await this.documentManager.findOne({
            userId,
            name,
            email
        });

        return documents;
    }
}
