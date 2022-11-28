import { IAppKeys, II18nBuilder, LanguageIso } from '../types';
import { merge } from 'shared-base';

export class I18nBuilder implements II18nBuilder {
    private resources: Json = {};
    private resourcesRaw: Json = {};

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

        this.resourcesRaw[language] = this.resourcesRaw[language] || {};
        this.resourcesRaw[language][appId] =
            this.resourcesRaw[language][appId] || {};

        this.resourcesRaw = merge(this.resourcesRaw, {
            [language]: {
                [appId]: data,
            },
        });

        return this;
    }

    withKeysByLanguage(appId: string, keysByLanguage: Json) {
        for (let language of Object.keys(keysByLanguage)) {
            const data = keysByLanguage[language];
            this.withLanguage(appId, language, data);
        }

        return this;
    }

    build(): IAppKeys {
        const resources = Object.keys(this.resources).reduce(
            (output, language: string) => {
                const data = this.resources[language];
                output[language as LanguageIso] = data as Json;
                return output;
            },
            {} as IAppKeys
        );

        return resources;
    }

    get raw() {
        return this.resourcesRaw;
    }
}
