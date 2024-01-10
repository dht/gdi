import type { Cost, FlowStatus } from '@gdi/store-base';
import { ThreadCreateAndRunParams } from 'openai/resources/beta/threads/threads';
export { AssistantCreateParams } from 'openai/resources/beta/assistants/assistants';

export type Json = Record<string, any>;

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
  setupId: string;
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
};
