import { Op } from 'sequelize';
import { FindOptions } from 'sequelize/types/lib/model';

export class QueryBuilder {
    private result: FindOptions = {
        where: {},
        order: undefined,
        limit: undefined,
        raw: undefined
    };

    public setRaw(raw: boolean): QueryBuilder {
        this.result.raw = raw;
        return this;
    }

    public setLimit(limit: number): QueryBuilder {
        this.result.limit = limit;
        return this;
    }

    public setOrder(field: string, order: string): QueryBuilder {
        this.result.order = [[field, order]];
        return this;
    }

    public where(field: string, value: string | number): QueryBuilder {
        if (value) {
            this.result.where = { ...this.result.where, [field]: value };
        }
        return this;
    }

    public whereNotEqual(field: string, value: string | number | undefined): QueryBuilder {
        if (value) {
            this.result.where = {
                ...this.result.where,
                [field]: {
                    [Op.ne]: value
                }
            };
        }
        return this;
    }

    public whereOr(values: { [key: string]: unknown }): QueryBuilder {
        if (values) {
            this.result.where = { ...this.result.where, [Op.or]: values };
        }
        return this;
    }

    public whereDate(field: string, value: string): QueryBuilder {
        this.result.where = {
            ...this.result.where,
            [field]: {
                [Op.lte]: value || new Date()
            }
        };
        return this;
    }

    public whereIn(field: string, value: string[]): QueryBuilder {
        if (value) {
            this.result.where = { ...this.result.where, [field]: { [Op.in]: [...value] } };
        }
        return this;
    }

    public build(): FindOptions {
        return this.result;
    }
}
