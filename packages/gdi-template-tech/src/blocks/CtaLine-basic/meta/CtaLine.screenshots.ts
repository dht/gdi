import type { IScreenshotsPerFlavour } from '@gdi/web-ui';

export const screenshots: IScreenshotsPerFlavour = {
    normal: {
        desktop: {
            large: {
                width: 1000,
                height: 400,
                ratio: 2.5,
                url: 'screenshot.gdi.cta line-basic.normal.desktop.large.webp',
                urlIsRemote: false,
            },
            thumb: {
                width: 1000,
                height: 400,
                ratio: 2.5,
                url: 'screenshot.gdi.cta line-basic.normal.desktop.thumb.webp',
                urlIsRemote: false,
            },
        },
        mobile: {
            large: {
                width: 500,
                height: 1337,
                ratio: 0.3739715781600598,
                url: 'screenshot.gdi.cta line-basic.normal.mobile.large.webp',
                urlIsRemote: false,
            },
            thumb: {
                width: 500,
                height: 1337,
                ratio: 0.3739715781600598,
                url: 'screenshot.gdi.cta line-basic.normal.mobile.thumb.webp',
                urlIsRemote: false,
            },
        },
    },
};
