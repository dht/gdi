const json: Json = {
    dog: 'A dog',
};

export const translate = (key: string) => {
    return json[key];
};
