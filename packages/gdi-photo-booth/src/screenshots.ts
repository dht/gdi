import capitalize from 'lodash/capitalize';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import { cropImage, image, resizeImageFromPath, Sharp } from './image';
import type { Page } from 'playwright';

type Pages = {
    pageDesktop: Page;
    pageMobile: Page;
};

let imageDesktop: Sharp, imageMobile: Sharp;

let promises: Promise<any>[] = [];

export const takePicture = async (
    page: Page,
    options: TakePictureOptions
): Promise<TakePictureResponse | null> => {
    const output: TakePictureResponse = cloneDeep(emptyResponse);

    const { selector, isDesktop, root } = options;

    const el = await page.locator(selector);
    if (!el) {
        console.log(`no selector for ${selector}`);
        return null;
    }

    const box = await el.boundingBox();
    if (!box) {
        return null;
    }

    const ratio = box.width / box.height;
    let width = 1;

    let image = isDesktop ? imageDesktop : imageMobile;
    const screenshotRawFileName = generateFileName({ ...options, size: 'raw', fileType: 'png' }); // prettier-ignore
    const screenshotRawPath = `${root}/${screenshotRawFileName}`;
    await cropImage(image, box, screenshotRawPath);

    const screenshotLargeFileName = generateFileName({ ...options, size: 'large', fileType: 'webp' }); // prettier-ignore
    const screenshotLargePath = `${root}/${screenshotLargeFileName}`;

    const screenshotThumbFileName = generateFileName({ ...options, size: 'thumb', fileType: 'webp' }); // prettier-ignore
    const screenshotThumbPath = `${root}/${screenshotThumbFileName}`;

    output.raw.width = box.width;
    output.raw.height = box.height;
    output.raw.ratio = ratio;

    width = isDesktop ? 1000 : 500;

    promises.push(
        resizeImageFromPath(screenshotRawPath, width, screenshotLargePath)
    );

    output.large.width = width;
    output.large.height = width / ratio;
    output.large.ratio = ratio;
    output.fileNames.large = screenshotLargeFileName;

    width = isDesktop ? 400 : 200;
    promises.push(
        resizeImageFromPath(screenshotRawPath, width, screenshotThumbPath)
    );

    output.thumb.width = width;
    output.thumb.height = width / ratio;
    output.thumb.ratio = ratio;
    output.fileNames.thumb = screenshotThumbFileName;

    return output;
};

export const screenShotsForComponent = async (
    widget: IWidget,
    pages: Pages,
    definitions: Json,
    outputDir: string
) => {
    const { pageDesktop, pageMobile } = pages;
    const { templateName, widgetName } = analyzeWidgetId(widget.id);
    const widgetKey = `com.usegdi.templates.${templateName}.${widgetName}`;

    for (let flavour of Object.keys(widget.sampleData ?? {})) {
        const className = `${widgetKey}-${flavour}`.replace(/\./g, '_');
        const selector = `.${className} > div`;

        const base = {
            root: outputDir,
            templateName,
            widgetName,
            flavour,
            selector,
        };

        const responseDesktop = await takePicture(pageDesktop, {
            ...base,
            isDesktop: true,
        });

        const responseMobile = await takePicture(pageMobile, {
            ...base,
            isDesktop: false,
        });

        if (!responseDesktop || !responseMobile) {
            return;
        }

        set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.desktop.large`, {...responseDesktop.large}); // prettier-ignore
        set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.desktop.thumb`, {...responseDesktop.thumb}); // prettier-ignore
        set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.mobile.large`, {...responseMobile.large}); // prettier-ignore
        set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.mobile.thumb`, {...responseMobile.thumb}); // prettier-ignore
        set(definitions, `dimensions.${templateName}.${widgetName}.${flavour}.desktop`, responseDesktop.large); // prettier-ignore
        set(definitions, `dimensions.${templateName}.${widgetName}.${flavour}.mobile`, responseMobile.large); // prettier-ignore
    }
};

export const screenshotsForWidgets = async (
    widgets: IWidgets,
    pages: Pages,
    outputDir: string
) => {
    await pages.pageDesktop.screenshot({
        path: `${outputDir}/desktop.png`,
        fullPage: true,
    });

    await pages.pageMobile.screenshot({
        path: `${outputDir}/mobile.png`,
        fullPage: true,
    });

    imageDesktop = image(`${outputDir}/desktop.png`);
    imageMobile = image(`${outputDir}/mobile.png`);

    const definitions: Json = {};

    const promisesToAdd = Object.values(widgets).map((widget: IWidget) =>
        screenShotsForComponent(widget, pages, definitions, outputDir)
    );

    promises.push(...promisesToAdd);

    await Promise.all(promises);

    return definitions;
};

export const analyzeWidgetId = (widgetId: string) => {
    const [topLevelDomain, domainName, partType, templateName, widgetName] =
        widgetId.split('.');

    return {
        topLevelDomain,
        domainName,
        partType,
        templateName,
        widgetName,
        ...widgetNameToCmp(widgetName),
    };
};

const widgetNameToCmp = (widgetName: string) => {
    const [cmpNameLowercase, cmpFlavour] = widgetName.split('-');

    return {
        cmpName: capitalize(cmpNameLowercase),
        cmpFlavour,
    };
};

type GenerateFilenameOptions = {
    templateName: string;
    widgetName: string;
    flavour: string;
    size: 'raw' | 'thumb' | 'large';
    isDesktop: boolean;
    fileType: 'png' | 'webp';
};

const generateFileName = (options: GenerateFilenameOptions) => {
    const { templateName, widgetName, flavour, size, isDesktop, fileType } =
        options;

    return [
        'screenshot',
        templateName,
        widgetName,
        flavour,
        isDesktop ? 'desktop' : 'mobile',
        size,
        fileType,
    ].join('.');
};

export type TakePictureOptions = {
    flavour: string;
    selector: string;
    isDesktop: boolean;
    root: string;
    templateName: string;
    widgetName: string;
};

export type TakePictureResponse = {
    raw: ImageInfo;
    large: ImageInfo;
    thumb: ImageInfo;
    fileNames: {
        large: string;
        thumb: string;
    };
    urls: {
        large: string;
        thumb: string;
    };
};

export type ImageInfo = {
    width: number;
    height: number;
    ratio: number;
};

const emptyResponse: TakePictureResponse = {
    raw: {
        width: 0,
        height: 0,
        ratio: 1,
    },
    large: {
        width: 0,
        height: 0,
        ratio: 1,
    },
    thumb: {
        width: 0,
        height: 0,
        ratio: 1,
    },
    fileNames: {
        large: '',
        thumb: '',
    },
    urls: {
        large: '',
        thumb: '',
    },
};
