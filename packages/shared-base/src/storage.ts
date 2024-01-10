import { uniq } from './godash';

interface LocalStorage {
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}

let storage: LocalStorage;

export const initStorage = (value: LocalStorage) => {
    storage = value;
};

export const getString = (key: string): string => {
    return localStorage.getItem(key) ?? '';
};

export const setString = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

export const getBoolean = (key: string): boolean => {
    return getString(key) === 'true';
};

export const setBoolean = (key: string, value: boolean) => {
    setString(key, String(value));
};

export const getJson = (key: string): Json | null => {
    const raw = getString(key);

    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
};

export const setJson = (key: string, json: Json) => {
    setString(key, JSON.stringify(json));
};

export const patchJson = (key: string, change: Json) => {
    const json = getJson(key) ?? {};
    setJson(key, { ...json, ...change });
};

export const getArray = (key: string, extra?: string[]): string[] => {
    const onAll = getJson(key) ?? {};
    const onStorage = Object.keys(onAll).filter((key) => onAll[key]);

    return uniq([...onStorage, ...(extra ?? [])]).sort();
};
