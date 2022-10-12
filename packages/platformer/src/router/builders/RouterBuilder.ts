import {
    CommandBarAction,
    ICommandBarItems,
    IContextBarItems,
    IMenuItems,
    IRouterBuilder,
    IRoutes,
    RouterBuilderResponse,
} from '../../types';
import {
    IWidgetInstance,
    IWidgetInstancesByPageDictionary,
    IWidgetInstancesByPageList,
} from 'igrid';
import { sortBy } from 'shared-base';

export class RouterBuilder implements IRouterBuilder {
    private routes: IRoutes = {};
    private menuItems: IMenuItems = [];
    private contextBarItems: IContextBarItems = [];
    private commandBarItems: ICommandBarItems = [];
    private instancesByPage: IWidgetInstancesByPageDictionary = {};
    private instanceId = 1;

    constructor(private menuGroups: string[]) {}

    getScopedPageId(appId: string, pageId: string) {
        return `${appId}_${pageId}`;
    }

    getScopedWidgetId(appId: string, widgetId: string) {
        return `${appId}_${widgetId}`;
    }

    getScopedContextBarItemId(appId: string, contextBarItemId: string) {
        return `${appId}_${contextBarItemId}`;
    }

    getScopedCommandBarItemId(appId: string, commandBarItemId: string) {
        return `${appId}_${commandBarItemId}`;
    }

    getScopedCommandBarAction(appId: string, action: CommandBarAction) {
        const output = { ...action };
        output.payload = { ...output.payload };

        if (output.payload.contextBarItemId) {
            output.payload.contextBarItemId =
                appId + '_' + output.payload.contextBarItemId;
        }

        return output;
    }

    withRoutes(appId: string, routes: IRoutes) {
        Object.keys(routes).forEach((pageId) => {
            const scopedPageId = this.getScopedPageId(appId, pageId);
            this.routes[scopedPageId] = routes[pageId];
        });
        return this;
    }

    withInstances(
        appId: string,
        instances: IWidgetInstancesByPageList,
        options?: any
    ) {
        Object.keys(instances).forEach((pageId) => {
            const scopedPageId = this.getScopedPageId(appId, pageId);
            this.instancesByPage[scopedPageId] = this.instancesByPage[scopedPageId] || {}; // prettier-ignore

            instances[pageId].forEach((instance: any) => {
                let { widgetId } = instance;

                const instanceId = String(this.instanceId++);

                const newInstance: IWidgetInstance = {
                    ...instance,
                    id: instanceId,
                    widgetId,
                };

                this.instancesByPage[scopedPageId][widgetId] = newInstance; // prettier-ignore
            });
        });

        return this;
    }

    withMenu(appId: string, menuItems: IMenuItems) {
        this.menuItems.push(...menuItems);

        const commandBarNavigate = menuItems.map((item) => {
            return {
                id: item.path,
                label: `Navigate: ${item.label}`,
                action: {
                    type: 'NAVIGATE',
                    payload: {
                        path: item.path,
                    },
                },
            };
        });

        this.withCommandBar(appId, commandBarNavigate);

        return this;
    }

    withContextBar(appId: string, contextBarItems: IContextBarItems) {
        contextBarItems.forEach((item) => {
            const contextBarItemId = this.getScopedContextBarItemId(
                appId,
                item.id
            );

            this.contextBarItems.push({
                ...item,
                id: contextBarItemId,
            });
        });

        return this;
    }

    withCommandBar(appId: string, commandBarItems: ICommandBarItems) {
        commandBarItems.forEach((item) => {
            const { action } = item;

            const scopedCommandBarItemId = this.getScopedCommandBarItemId(
                appId,
                item.id
            );

            this.commandBarItems.push({
                ...item,
                action: this.getScopedCommandBarAction(appId, action),
                id: scopedCommandBarItemId,
            });
        });

        this.commandBarItems.sort(sortBy('label'));

        return this;
    }

    build(): RouterBuilderResponse {
        const menuItems = this.menuItems.sort(sortBy('groupId', 'asc'));

        return {
            routes: this.routes,
            menuGroups: this.menuGroups,
            instancesByPage: this.instancesByPage,
            contextBarItems: this.contextBarItems,
            commandBarItems: this.commandBarItems,
            menuItems,
        };
    }
}
