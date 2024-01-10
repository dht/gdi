export const camelCase = (text: string) => {
    if (text.includes('-')) {
        return text.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }

    return lowerFirst(text);
};

export const lowerFirst = (text: string) => {
    return text.charAt(0).toLowerCase() + text.slice(1);
};

export const upperFirst = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const uniq = (arr: any[]) => {
    return [...new Set(arr)];
};
