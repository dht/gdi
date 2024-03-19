import type { Cost, FlowStatus } from '@gdi/store-base';
import { ThreadCreateAndRunParams } from 'openai/resources/beta/threads/threads';
// export { AssistantCreateParams } from 'openai/resources/beta/assistants/assistants';

export type Json = Record<string, any>;

export type AssistantCreateParams = any;

export type User = UserInfo & {
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    creationTime: string;
    lastSignInTime: string;
  };
  providerData: UserInfo[];
};

export type UserInfo = {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string;
  uid: string;
};

export interface ThreadCreateParams {
  messages?: Array<ThreadCreateAndRunParams.Thread.Message>;
  metadata?: unknown | null;
}

export type BaseResponse = {
  id: string;
  status: FlowStatus;
  meta: ResponseMeta;
  cost: Cost;
  duration: number;
  durationText: string;
  data: any;
  isSuccess?: boolean;
};

export type ApiResponse = BaseResponse & {
  data: {
    buffer: any;
  };
};

export type LlmResponse = BaseResponse & {
  data: Json;
};

export type ResponseMeta = {
  tsStart: number;
  tsEnd?: number;
  duration?: number;
  isError?: boolean;
  isSuccess?: boolean;
  statusCode?: number;
  errorMessage?: string;
  errorCode?: string;
};

export type ExtraConfig = {
  errorXpath: Record<string, string>;
};

export interface IResponseBuilder {
  build(): BaseResponse;
}

export type ISave = {
  id: string;
  boardId: string;
  nodeNames: string[];

  // transient
  data?: Json;
};

export type IAsset = {
  id: string;
  fileName: string;
  filePath: string;
  assetUrl: string;
  contentType: string;
  tsAdded: number;
  tsModified?: number;
  size?: number;
  tags: Json;
  project: string;
};

export interface DBAdapter {
  getCollection: (path: string) => Promise<Json[]>;
  replaceCollection: (path: string, data: Json) => Promise<void>;
  getItem: (path: string) => Promise<Json>;
  setItem: (path: string, change: Json) => Promise<void>;
  patchItem: (path: string, change: Json) => Promise<void>;
  deleteItem: (path: string) => Promise<void>;
  getKeys: (req: any) => Promise<Json>;
  patchKeys: (req: any, json: Json) => Promise<void>;
  getCredits: (req: any) => Promise<number>;
  patchCredits: (req: any, value: number) => Promise<void>;
  addLog: (req: any, json: Json) => Promise<void>;
}

export interface StorageAdapter {
  file: (path: string, isMeta?: boolean) => IFile;
  addListener: (file: IFile) => void;
  getFile: (file: IFile) => Promise<Buffer>;
  renameFile: (file: IFile, newFilePath: string) => Promise<Buffer>;
}

export type IFile = {
  publicUrl: () => string;
  makePublic: () => Promise<void>;
  save: (buffer: Buffer, options: any) => Promise<void>;
  delete: () => Promise<void>;

  // for local runners
  isMeta?: boolean;
  fullPath: string;
  info: Json;
};
