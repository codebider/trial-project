import { AnySchema } from 'yup';
import { NextFunction, Request, Response as ExpressResponse } from 'express';

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404
}

export enum ValidatorEnum {
    Body = 'body',
    Headers = 'headers',
    Query = 'query',
    Params = 'params'
}

export interface Validator {
    [ValidatorEnum.Body]?: AnySchema;
    [ValidatorEnum.Params]?: AnySchema;
    [ValidatorEnum.Query]?: AnySchema;
    [ValidatorEnum.Headers]?: AnySchema;
}

export type ExpressRequest<T> = Request<any, any, T>;

export interface Response<Body> {
    statusCode: HttpStatusCode;
    body: Body;
}

export type Handler<ResponseBody> = (
    req: ExpressRequest<unknown>,
    res?: ExpressResponse,
    next?: NextFunction
) => Promise<Response<ResponseBody>>;

export interface Route {
    path: string;
    method: HttpMethod;
    validator?: Validator;
    handler: Handler<unknown>;
}
