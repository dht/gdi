const BOOLEAN_TRUE = 'TRUE';
const BOOLEAN_FALSE = 'FALSE';

export const getString = (key: string): string =>
    localStorage.getItem(key) ?? '';
export const setString = (key: string, value: string) =>
    localStorage.setItem(key, value);

export const getBoolean = (key: string): boolean =>
    getString(key) === BOOLEAN_TRUE;
export const setBoolean = (key: string, value: boolean) =>
    setString(key, value ? BOOLEAN_TRUE : BOOLEAN_FALSE);

export const getJson = <T = any>(key: string): T | null =>
    getString(key) ? JSON.parse(getString(key)) : null;
export const setJson = <T = any>(key: string, value: T) =>
    setString(key, JSON.stringify(value));
