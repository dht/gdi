import type {
    IWidget,
    IWidgetInstance,
    IWidgetInstances,
    IWidgets,
} from 'igrid';
import type { StoreStructure } from 'redux-store-generator';

export type IMixerStore = StoreStructure & {
    appStateMixer: IMixerState;
    currentIds: ICurrentIds;
    meta: IMeta;
    locale: ILocale;
    palette: IPalette;
    fontSizes: IFontSizes;
    spacing: ISpacing;
    fonts: IFonts;
    instances: IWidgetInstances;
    widgets: IWidgets;
    instancesMapColors: Json;
    instancesMapStrings: Json;
    instancesProps: Json;
    pages: IPages;
    strings: Json;
    library: IWidgets;
    typographyLibrary: ITypographyOptions;
    palettesLibrary: IPaletteOptions;
    locales: ILocaleOptions;
    packages: IPackages;
};

export type IViewMode = 'visual' | 'structure' | 'wireframe' | 'code';

export type IMixerState = {
    stateKey: string;
    mode: IViewMode;
    selectedToolId: string;
    paletteId: string;
};

export type ICurrentIds = {
    pageId: string;
    selectedInstanceId: string;
    contentInstanceId: string;
    libraryInstanceId: string;
};

export type IMeta = {
    schemaVersion: string;
};

export type ILocale = {
    localeId: string;
    isRtl: boolean;
};

export type IPalette = {
    themeDarker: string;
    themeDark: string;
    themeDarkAlt: string;
    themePrimary: string;
    themeSecondary: string;
    themeTertiary: string;
    themeLight: string;
    themeLighter: string;
    themeLighterAlt: string;
    black: string;
    blackTranslucent40: string;
    neutralDark: string;
    neutralPrimary: string;
    neutralPrimaryAlt: string;
    neutralSecondary: string;
    neutralSecondaryAlt: string;
    neutralTertiary: string;
    neutralTertiaryAlt: string;
    neutralQuaternary: string;
    neutralQuaternaryAlt: string;
    neutralLight: string;
    neutralLighter: string;
    neutralLighterAlt: string;
    accent: string;
    white: string;
    whiteTranslucent40: string;
    yellowDark: string;
    yellow: string;
    yellowLight: string;
    orange: string;
    orangeLight: string;
    orangeLighter: string;
    redDark: string;
    red: string;
    magentaDark: string;
    magenta: string;
    magentaLight: string;
    purpleDark: string;
    purple: string;
    purpleLight: string;
    blueDark: string;
    blueMid: string;
    blue: string;
    blueLight: string;
    tealDark: string;
    teal: string;
    tealLight: string;
    greenDark: string;
    green: string;
    greenLight: string;
};

export type IFontSizes = {
    tiny: string;
    xSmall: string;
    small: string;
    smallPlus: string;
    medium: string;
    mediumPlus: string;
    icon: string;
    large: string;
    xLarge: string;
    xLargePlus: string;
    xxLarge: string;
    xxLargePlus: string;
    superLarge: string;
    mega: string;
};

export type ISpacing = {
    s1: string;
    s2: string;
    m: string;
    l1: string;
    l2: string;
};

export type IFonts = {
    typographyId: string;
    fontFamily: string;
    fontWeight: string;
};

export type IPage = {
    id: string;
    title: string;
    description: string;
    iconName?: string;
    order?: number;
};

export type IPages = Record<string, IPage>;

export type ITypography = {
    id: string;
    title: string;
    fontFamily: string;
    link: string;
};

export type ITypographyOptions = Record<string, ITypography>;

export type IColorPalette = {
    id: string;
    title: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
};

export type IPaletteOptions = Record<string, IColorPalette>;

export type ILocaleOption = {
    id: string;
    title: string;
};

export type ILocaleOptions = Record<string, ILocaleOption>;

export type IPackages = Json;

// ======================= SELECTORS OUTPUT =======================
export type IElement = IWidgetInstance & {
    widget: IWidget;
    elementType: string;
};
