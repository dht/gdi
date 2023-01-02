import { Express, Request, Response } from 'express';

export type Json = Record<string, any>;

export interface IEndpointsBuilder {
    withRouter: (path: string, router: any) => IEndpointsBuilder;
    withRouters: (routers: IRouters) => IEndpointsBuilder;
    build: () => IRouters;
}

export type IExpressOptions = {
    withCors?: boolean;
    startListening?: boolean;
    port?: number;
    debug?: boolean;
};

export interface IExpressBuilder {
    withRouters: (routers: IRouters) => IExpressBuilder;
    withOptions: (options: IExpressOptions) => IExpressBuilder;
    withMiddleware: (middleware: any) => IExpressBuilder;
    build: () => Express;
}

export type IRouters = Record<string, any>;

export type IServiceOptions = {};

export type ParamType =
    | 'string'
    | 'number'
    | 'date'
    | 'boolean'
    | 'string?'
    | 'number?'
    | 'date?'
    | 'boolean?';

export type IEndpointSchema = {
    body: {
        [key: string]: ParamType;
    };
};

export type AccessLevel = 'private' | 'public';

export type IToken = {
    value: string;
    projectKey: string;
    validUntil: string;
    lastAccessed?: string;
};

export type IGeneratedToken = {
    value: string;
    valueHashed: string;
};

export type IErrorBody = {
    errorCode: number;
    errorMessage: string;
    errors?: string[];
};
