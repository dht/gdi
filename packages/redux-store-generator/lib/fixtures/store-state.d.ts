import { StoreStructure } from '../types/types';
export type AppState = {
    isLoading: boolean;
    isSaving: boolean;
    email?: string;
};
export type Product = {
    id: string;
    title: string;
};
export type Products = Record<string, Product>;
export type Log = {
    id: string;
};
export type Logs = Array<Log>;
export type Message = {
    id: string;
    timestamp: number;
    content: string;
    isMe: boolean;
};
export type Chat = {
    id: string;
    title: string;
    items: Message[];
};
export type Chats = Record<string, Chat>;
export interface MyStore extends StoreStructure {
    appState: AppState;
    products: Products;
    logs: Logs;
    chats: Chats;
}
export declare const state: MyStore;
export default state;
