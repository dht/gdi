import type { StoreStructure } from 'redux-store-generator';

export type ISiteStore = StoreStructure & ISite & {};

type SiteId = string;
type TemplateId = string;

export type ISite = {
    meta: IMetaSite;
    locale: ILocale;
    pages: IPages;
    pageInstances: IPageInstances;
    instances: IWidgetInstances;
    instancesProps: Json;
    widgets: IWidgets;
    images: IImages;
    palette: IPalette;
    fonts: IFonts;
    breakpoints: IBreakpoints;
    siteProperties: ISiteProperties;
};

export type ITemplate = Optional<
    ISite,
    'locale' | 'images' | 'palette' | 'fonts' | 'breakpoints' | 'siteProperties'
>;

export type ISites = Record<string, ISite>;

export type ITemplates = Record<string, ITemplate>;

export type ITemplateMetas = Record<string, IMetaSite>;

export type IMetaSite = {
    identifier: SiteId | TemplateId;
    schemaVersion?: string;
    author?: IAuthor;
    version?: string;
    id?: string;
};

export type IAuthor = {
    name: string;
    email?: string;
    url?: string;
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
    templateId?: TemplateId;
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
    identifier: string;
    title: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    id?: string;
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

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type IMetaTag = {
    name: string;
    content: string | string[];
};

export type ILinkTag = {
    href: string;
    rel: string;
    type?: string;
    media?: string;
    title?: string;
    sizes?: string;
};

export type ISiteProperties = {
    title: string;
    metaTags: IMetaTag[];
    linkTags: ILinkTag[];
};
