export class I18nBuilder {
    private resources: Json = {};

    getScopedKey(appId: string, key: string) {
        return `${appId}_${key}`;
    }

    withLanguage(appId: string, language: string, data: Json) {
        const scopedData = Object.keys(data).reduce((output, key) => {
            const scopedKey = this.getScopedKey(appId, key);
            output[scopedKey] = data[key];
            return output;
        }, {} as Json);

        this.resources[language] = {
            ...this.resources[language],
            ...scopedData,
        };

        return this;
    }

    withKeysByLanguage(appId: string, keysByLanguage: Json) {
        for (let language of Object.keys(keysByLanguage)) {
            const data = keysByLanguage[language];
            this.withLanguage(appId, language, data);
        }
    }

    build(): Json {
        const resources = Object.keys(this.resources).reduce(
            (output, language) => {
                const data = this.resources[language];

                output[language] = {
                    translation: data,
                };
                return output;
            },
            {} as Json
        );

        return resources;
    }
}
