export type Json = Record<string, any>;

export interface SocketsAdapter {
  addListener(path: string): void;
  invokeListeners(path: string, data: any): void;
  removeListener(path: string): void;
}

export interface DBAdapter {
  getCollection: (path: string) => Promise<Json[]>;
  replaceCollection: (path: string, data: Json) => Promise<void>;
  getItem: (path: string) => Promise<Json>;
  setItem: (path: string, change: Json) => Promise<void>;
  patchItem: (path: string, change: Json) => Promise<void>;
  deleteItem: (path: string) => Promise<void>;
  getKeys: (req: any) => Promise<Json>;
  patchKeys: (req: any, json: Json) => Promise<void>;
}

export interface StorageAdapter {
  file: (path: string) => IFile;
}

export type IFile = {
  publicUrl: () => string;
  makePublic: () => Promise<void>;
  save: (buffer: Buffer, options: any) => Promise<void>;
  delete: () => Promise<void>;
};
