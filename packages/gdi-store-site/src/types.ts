import type {
    IWidget,
    IWidgets,
    IWidgetInstance,
    IWidgetInstances,
} from 'igrid';
import type { StoreStructure } from 'redux-store-generator';

export type ISiteStore = StoreStructure & {
    meta: IMeta;
    palette: IPalette;
    fontSizes: IFontSizes;
    spacing: ISpacing;
    fonts: IFonts;
    widgets: IWidgets;
    instances: IWidgetInstances;
    instancesMapColors: Json;
    instancesMapStrings: Json;
    instancesProps: Json;
    strings: Json;
};

export type IMeta = {
    schemaVersion: string;
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

// ======================= SELECTORS OUTPUT =======================
export type IElement = IWidgetInstance & {
    widget: IWidget;
    elementType: string;
    instanceProps: Json;
};
