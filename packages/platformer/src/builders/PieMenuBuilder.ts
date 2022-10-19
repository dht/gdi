import { IPieMenuBuilder } from '../types';

export class PieMenuBuilder implements IPieMenuBuilder {
    private configs: Partial<IPieMenuConfigPerItemType> = {};

    withPieMenuConfigs(
        appId: string,
        menuConfig: Partial<IPieMenuConfigPerItemType>
    ) {
        Object.values(menuConfig).forEach((config: IPieMenuConfig) => {
            const { itemType } = config;

            this.configs[itemType] = this.configs[itemType] || {
                itemType,
                appSources: [],
                options: [],
            };

            const configCursor = this.configs[itemType]!;

            if (!configCursor.appSources!.includes(appId)) {
                configCursor.appSources!.push(appId);
            }

            configCursor.options = [...configCursor.options, ...config.options];
        });

        return this;
    }

    build(): IPieMenuConfigPerItemType {
        return this.configs as IPieMenuConfigPerItemType;
    }
}
