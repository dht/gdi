import { IWidget, IWidgetInstancesByPageList } from '@gdi/platformer';
import { IPalette, IRawStyle, ISpacing } from '@gdi/web-ui';

export type Site = {
    palette: Partial<IPalette>;
    fonts: Record<FontSize, string>;
    rtl: boolean;
    spacing: Partial<ISpacing>;
    defaultFontStyle: IRawStyle;
    instances: IWidgetInstancesByPageList;
    widgets: IWidget[];
    instancesMapColors: Json;
    instancesMapStrings: Json;
    instancesProps: Json;
    pagesInfo: Record<string, PageInfo>;
    i18n: {
        en: Json;
    };
    store: Record<string, Json>;
};

export type PageInfo = {
    id: string;
    title: string;
    description: string;
    iconName?: string;
    order?: number;
};

type FontSize =
    | 'tiny'
    | 'xSmall'
    | 'small'
    | 'smallPlus'
    | 'medium'
    | 'mediumPlus'
    | 'icon'
    | 'large'
    | 'xLarge'
    | 'xLargePlus'
    | 'xxLarge'
    | 'xxLargePlus'
    | 'superLarge'
    | 'mega';
