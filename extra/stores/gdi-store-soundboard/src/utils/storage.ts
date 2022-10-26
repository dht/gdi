const APP_STATE_KEY = 'APP_STATE_KEY';

export const getString = (key: string): string => {
    return localStorage.getItem(key) ?? '';
};

export const setString = (key: string, value: string) => {
    localStorage.setItem(key, value);
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

export const getAppState = () => {
    return getJson(APP_STATE_KEY);
};

export const setAppState = (appState: Json) => {
    return setJson(APP_STATE_KEY, appState);
};
