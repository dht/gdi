// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A11 = {};

declare global {
    export type ISiteStore = StoreStructure & {
        meta: IMetaStore;
        locale: ILocale;
        pages: IPages;
        palette: IPalette;
        fontSizes: IFontSizes;
        images: IImages;
        spacing: ISpacing;
        fonts: IFonts;
        breakpoints: IBreakpoints;
        blocks: Record<string, IBlockInfo>;
        instancesBlocks: IBlockInstances;
        instancesMapColors: Json;
        instancesMapStrings: Json;
        instancesProps: Json;
        strings: Json;
    };

    export type IMetaStore = {
        schemaVersion: string;
    };

    export type ILocale = {
        localeId: string;
        isRtl: boolean;
    };

    export type IPage = {
        id: string;
        title: string;
        description: string;
        iconName?: string;
        order?: number;
    };

    export type IPages = Record<string, IPage>;

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

    export type IBreakpoint = {
        id: string;
        screenWidth: number;
        screenHeight: number;
        minWidth: number;
        maxWidth?: number;
        containerWidth: number;
    };

    export type IBreakpoints = Record<string, IBreakpoint>;
}
