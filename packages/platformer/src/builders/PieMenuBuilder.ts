import { IPieMenuBuilder } from '../types';

export class PieMenuBuilder implements IPieMenuBuilder {
    private configs: Partial<IPieMenuConfigPerItemType> = {};
    private translations: Json = {};
    withPieMenuConfigs(
        appId: string,
        menuConfig: Partial<IPieMenuConfigPerItemType>
    ) {
        Object.values(menuConfig).forEach((config: IPieMenuConfig) => {
            const { itemType, options = [] } = config;

            this.configs[itemType] = this.configs[itemType] || {
                itemType,
                appSources: [],
                options: [],
            };

            const configCursor = this.configs[itemType]!;

            if (!configCursor.appSources!.includes(appId)) {
                configCursor.appSources!.push(appId);
            }

            const optionsWithAppId = options.map((option: any) => ({
                ...option,
                appId,
            }));

            configCursor.options = [
                ...configCursor.options,
                ...optionsWithAppId,
            ];
        });

        return this;
    }

    build(): IPieMenuConfigPerItemType {
        return this.configs as IPieMenuConfigPerItemType;
    }
}
