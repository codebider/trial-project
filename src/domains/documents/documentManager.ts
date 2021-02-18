import 'reflect-metadata';
import { Sequelize } from 'sequelize';
import { inject, injectable } from 'inversify';

import { Document, DocumentModel, DocumentStatic } from '@server/domains/documents/entity/document';
import { DocumentData, DocumentType } from '@server/domains/documents/entity/document.types';
import { TYPES } from '@server/commons/types';
import { FindAll, FindOne, UpdateBy } from '@server/domains/documents/type';
import omitUndefined from '@server/commons/utils/omitUndefined';

@injectable()
export class DocumentManager {
    private documentInstance: DocumentStatic;
    constructor(@inject(TYPES.DbConnector) connector: Sequelize) {
        this.documentInstance = Document(connector);
    }

    async create(user: DocumentType): Promise<DocumentData> {
        const documentData: DocumentModel = this.documentInstance.build(user);

        const result = await documentData.save();
        return result.get({ pain: true });
    }

    async findOne(filter: FindOne): Promise<DocumentData> {
        const documentData: DocumentData = await this.documentInstance.findOne({
            where: omitUndefined(filter as any) as any,
            raw: true
        });

        return documentData;
    }

    async findAll(filter: FindAll): Promise<DocumentData[]> {
        const documentData: DocumentData[] = await this.documentInstance.findAll({
            where: omitUndefined(filter as any) as any,
            raw: true
        });

        return documentData;
    }

    async count(filter: FindAll): Promise<number> {
        const totalOfRecords: number = await this.documentInstance.count({
            where: omitUndefined(filter as any) as any
        });

        return totalOfRecords;
    }

    async deleteById(userId: number, documentId: number): Promise<void> {
        await this.documentInstance.destroy({
            where: {
                id: documentId,
                userId
            }
        });
    }

    async updateById(userId: number, documentId: number, update: UpdateBy): Promise<void> {
        await this.documentInstance.update(update, {
            where: {
                id: documentId,
                userId
            }
        });
    }
}
