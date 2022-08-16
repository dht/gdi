import { Command } from './utils/command';

export type Json = Record<string, any>;

export type Middleware = (command: Command, next: any) => void | Promise<void>;

export type File = {
    filepath: string;
    content: string;
};

export type CreateMiddlewares = {
    preRun: () => Middleware;
    parseInstructions: () => Middleware;
    postRun: () => Middleware;
};

export type LocalParams = {
    entityType: string;
    entityName: string;
    cwd: string;
    outputDir: string;
    templatesPath: string;
    templatePath: string;
    template: string;
};

export type ReplaceMethod = (local: LocalParams) => string;
export type ReplaceMap = Record<string, ReplaceMethod>;

export type Local = {
    params: LocalParams;
    rulesReplaceFileName: ReplaceMap;
    rulesReplaceContent: ReplaceMap;
    filesToCreate: File[];
} & Json;
