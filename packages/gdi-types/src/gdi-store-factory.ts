// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A19 = {};

declare global {
    export type IFactoryStore = StoreStructure & {
        meta: IGdiMeta;
        appStateFactory: IFactoryState;
        currentIdsFactory: ICurrentIdsFactory;
        layouts: ILayouts;
        articles: IArticles;
        articleCategories: IArticleCategories;
    };

    export type IFactoryState = {
        stateKey: string;
        mode: IViewMode;
        showItemsInTable: boolean;
        showPropertiesModal: boolean;
        isLoadingLayoutItems: boolean;
    };

    export type ICurrentIdsFactory = {
        articleId: string;
        layoutId: string;
        flexEntityId: string;
        widgetId: string;
        resolutionId: string;
    };

    export type ILocation = {
        id: string;
        name: string;
    };

    export type ILocations = Record<string, ILocation>;

    export type ILayout = {
        id: string;
        name: string;
        items: IFlexEntities;
        tags: string[];
    };

    export type ILayouts = Record<string, ILayout>;

    export type IFlexEntity = {
        id: string;
        parentId: string;
        locationId?: string;
        entityType: 'container' | 'item';
        direction?: 'row' | 'column';
        resolution: IResolution;
        order?: number;
        flex?: number;
        style?: Json;
        props?: Json;
        isLocked?: boolean;
    };

    export type IFlexEntities = IFlexEntity[];

    export type IArticleStatus = 'draft' | 'published' | 'archived';

    export type IArticle = {
        id: string;
        title: string;
        intro: string;
        imageUrl: string;
        imageThumbUrl: string;
        imageDescription: string;
        imageSource: string;
        ratio?: number;
        authorName: string;
        publishDate: string;
        lastPublishDate: string;
        lastSaveDate: string;
        comments: number;
        slogan: string;
        linkPath: string;
        status: IArticleStatus;
        isPublished: boolean;
        content: string;
        categoryBreadcrumbs: string;
        tags: string[];
        dataTags: string[];
        minutesSpentEditing: number;
        wordCount?: number;
    };

    export type IArticles = Record<string, IArticle>;

    export type IArticleCategory = {
        id: string;
        parentId: string;
        title: string;
    };

    export type IArticleCategories = Record<string, IArticleCategory>;
}
