export type Json = Record<string, any>;

export interface SocketsAdapter {
  addListener(path: string, callback: any): void;
  invokeListeners(path: string, data: any): void;
  removeListener(path: string, callback: any): void;
}
