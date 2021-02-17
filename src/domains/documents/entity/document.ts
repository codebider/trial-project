import { Sequelize, BuildOptions, Model, DataTypes } from 'sequelize';

import { DocumentAttributes } from '@server/domains/documents/entity/document.types';

export class DocumentModel extends Model<DocumentAttributes> {}

export type DocumentStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): DocumentModel;
};

export const Document = (sequelize: Sequelize): DocumentStatic => {
    return sequelize.define('Documents', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'Users', key: 'id' }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ktpNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        npwpNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        passportNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }) as DocumentStatic;
};
