// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A14 = {};

declare global {
    export type ISiteStore = StoreStructure & ISite & {};

    export type ISite = {
        meta: IMetaSite;
        locale: ILocale;
        pages: IPages;
        pageInstances: IPageInstances;
        instances: IWidgetInstances;
        instancesProps: Json;
        widgets: IWidgets;
        images: IImages;
        palette: IPaletteWithKey;
        fonts: IFonts;
        breakpoints: IBreakpoints;
    };

    export type IMetaSite = {
        schemaVersion: string;
    };

    export type ILocale = {
        localeId: string;
        isRtl: boolean;
    };

    export type PageStatus = 'draft' | 'production' | 'archived';

    export type IPage = {
        id: string;
        title: string;
        description: string;
        iconName?: string;
        status: PageStatus;
        order?: number;
        lastPublishDate?: string;
        pageInstanceId?: string;
        path: string;
        dealerId?: string;
        isProtected?: boolean;
        tags: string[];
        enabled?: boolean;
    };

    export type IPageInstance = {
        id: string;
        pageId: string;
        version: string;
        description?: string;
        order?: number;
        items: IPageInstanceJourney[];
    };

    export type PageJourneyEvent = 'promoted' | 'unpublished' | 'archived';

    export type IPageInstanceJourney = {
        id: string;
        date: string;
        event: PageJourneyEvent;
        notes?: string;
        authorId: string;
    };

    export type IPages = Record<string, IPage>;
    export type IPageInstances = Record<string, IPageInstance>;

    export type IPalette = {
        id: string;
        title: string;
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
    };

    export type IPaletteWithKey = {
        key: string;
        title: string;
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
    };

    export type IFonts = {
        typographyId: string;
        fontFamily: string;
        fontWeight: string;
    };

    export type IBreakpoint = {
        id: string;
        screenWidth: number;
        screenHeight: number;
        minWidth: number;
        maxWidth?: number;
        containerWidth: number;
        isDefault?: boolean;
        count?: number;
        order?: number;
    };

    export type IBreakpoints = Record<string, IBreakpoint>;

    export type IResolution =
        | 'mobile'
        | 'tablet'
        | '720p'
        | 'HD'
        | 'HD+'
        | '1080p'
        | '2k'
        | '4k';
}
