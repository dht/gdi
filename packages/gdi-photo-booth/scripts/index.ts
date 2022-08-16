import * as chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';
import { capitalize } from 'lodash';
import { cert, initializeApp } from 'firebase-admin/app';
import { chromium, Page } from 'playwright';
import { getStorage } from 'firebase-admin/storage';
import { LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesBasic } from '@gdi/template-basic';
import { initTemplates as initTemplatesMinimalist } from '@gdi/template-minimalist';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';
import { Json } from './types';
import { Metadata } from '@playwright/test';
import { set } from 'lodash';
import { templateDimensions, templateScreenshot } from './templates';
import type { OutputInfo } from 'sharp';
import type { UploadResponse } from '@google-cloud/storage';

const DEBUG = true;
const OUTPUT_DIR = './screenshots/';

let definitions: Json = {};

let widgets: IWidgets;

initializeApp({
    credential: cert('../../../firebaseServiceAccount.json'),
    databaseURL: 'https://usegdi-a56c4.firebaseio.com',
    storageBucket: 'gs://usegdi-a56c4.appspot.com',
});

const bucket = getStorage().bucket();

let pageDesktop: Page, pageMobile: Page;

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

type TakePictureOptions = {
    flavour: string;
    selector: string;
    isDesktop: boolean;
    root: string;
    templateName: string;
    widgetName: string;
};

type ImageInfo = {
    width: number;
    height: number;
    ratio: number;
};

type TakePictureResponse = {
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

const uploadAllScreenshots = async () => {
    let promises = [],
        promise;

    console.time('uploading all screenshots');

    const files = fs
        .readdirSync(OUTPUT_DIR)
        .filter((fileName) => fileName.match(/webp$/));

    files.map((file) => {
        promise = bucket.upload(`${OUTPUT_DIR}${file}`, {
            public: true,
            destination: `screenshots/${file}`,
        });
        promises.push(promise);
    });

    const responses: Promise<UploadResponse>[] = await Promise.all(promises);

    const responseForFile = files.reduce((output, file, index) => {
        const metaData: Metadata = responses[index][1];
        output[file] = metaData;
        return output;
    }, {} as Record<string, Metadata>);

    console.timeEnd('uploading all screenshots');

    return responseForFile;
};

const takePicture = async (
    page: Page,
    options: TakePictureOptions
): Promise<TakePictureResponse> => {
    const output = {
        raw: { width: 1, height: 1, ratio: 1 },
        large: { width: 1, height: 1, ratio: 1 },
        thumb: { width: 1, height: 1, ratio: 1 },
        fileNames: {
            large: '',
            thumb: '',
        },
        urls: {
            large: '',
            thumb: '',
        },
    };

    let info: OutputInfo;

    const { flavour, selector, isDesktop, root, templateName, widgetName } =
        options;

    const base = {
        root,
        flavour,
        isDesktop,
        templateName,
        widgetName,
    };

    const screenshotRawFileName = generateFileName({ ...base, size: 'raw', fileType: 'png' }); // prettier-ignore
    const screenshotRawPath = root + screenshotRawFileName;

    const screenshotLargeFileName = generateFileName({ ...base, size: 'large', fileType: 'webp' }); // prettier-ignore
    const screenshotLargePath = root + screenshotLargeFileName;

    const screenshotThumbFileName = generateFileName({ ...base, size: 'thumb', fileType: 'webp' }); // prettier-ignore
    const screenshotThumbPath = root + screenshotThumbFileName;

    await page.locator(selector).screenshot({ path: screenshotRawPath });
    info = await getImageInfo(screenshotRawPath);
    output.raw.width = info.width;
    output.raw.height = info.height;
    output.raw.ratio = info.width / info.height;

    info = await resizeImage(
        screenshotRawPath,
        isDesktop ? 1000 : 500,
        screenshotLargePath
    );

    output.large.width = info.width;
    output.large.height = info.height;
    output.large.ratio = info.width / info.height;
    output.fileNames.large = screenshotLargeFileName;

    await resizeImage(
        screenshotRawPath,
        isDesktop ? 400 : 200,
        screenshotThumbPath
    );

    output.thumb.width = info.width;
    output.thumb.height = info.height;
    output.thumb.ratio = info.width / info.height;
    output.fileNames.thumb = screenshotThumbFileName;

    return output;
};

const screenShotsForComponent = async (widget: IWidget) => {
    const { templateName, widgetName } = analyzeWidgetId(widget.id);
    const widgetKey = `com.usegdi.templates.${templateName}.${widgetName}`;

    for (let flavour of Object.keys(widget.info.sampleData)) {
        const className = `${widgetKey}-${flavour}`.replace(/\./g, '_');
        const selector = `.${className} > div`;

        const base = {
            root: OUTPUT_DIR,
            templateName,
            widgetName,
            flavour,
            selector,
        };

        const selectorExists = await pageDesktop.$(selector);
        if (selectorExists) {
            console.time(
                'taking screenshots for ' +
                    chalk.cyan(widget.id) +
                    '-' +
                    flavour
            );

            const responseDesktop = await takePicture(pageDesktop, {
                ...base,
                isDesktop: true,
            });

            const responseMobile = await takePicture(pageMobile, {
                ...base,
                isDesktop: false,
            });

            console.timeEnd(
                'taking screenshots for ' +
                    chalk.cyan(widget.id) +
                    '-' +
                    flavour
            );

            set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.desktop.large`, {...responseDesktop.large}); // prettier-ignore
            set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.desktop.thumb`, {...responseDesktop.thumb}); // prettier-ignore
            set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.mobile.large`, {...responseMobile.large}); // prettier-ignore
            set(definitions, `screenshots.${templateName}.${widgetName}.${flavour}.mobile.thumb`, {...responseMobile.thumb}); // prettier-ignore

            set(definitions, `dimensions.${templateName}.${widgetName}.${flavour}.desktop`, responseDesktop.large); // prettier-ignore
            set(definitions, `dimensions.${templateName}.${widgetName}.${flavour}.mobile`, responseMobile.large); // prettier-ignore
        } else {
            console.log(`no selector for ${selector}`);
        }
    }
};

const resizeImage = (
    inputPath: string,
    toWidth: number,
    outputPath: string
): Promise<OutputInfo> => {
    return new Promise((resolve, reject) => {
        sharp(inputPath)
            .resize(toWidth)
            .toFile(outputPath, (err, info) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(info);
            });
    });
};

const getImageInfo = (inputPath): Promise<OutputInfo> => {
    return new Promise((resolve, reject) => {
        sharp(inputPath).toBuffer((err, _buffer, info) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(info);
        });
    });
};

const widgetNameToCmp = (widgetName: string) => {
    const [cmpNameLowercase, cmpFlavour] = widgetName.split('-');

    return {
        cmpName: capitalize(cmpNameLowercase),
        cmpFlavour,
    };
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

export const analyzeScreenshotName = (screenshotName: string) => {
    const [_s, templateName, widgetName, sampleName, device, size] =
        screenshotName.split('.');

    const [cmpNameLowercase, cmpFlavour] = widgetName.split('-');
    const cmpName = capitalize(cmpNameLowercase);

    return {
        templateName,
        widgetName,
        sampleName,
        device,
        size,
        cmpName,
        cmpFlavour,
    };
};

const writeDefinitionsFiles = async (
    uploadResponse: Record<string, Metadata>,
    packagePath: string
) => {
    Object.keys(uploadResponse).forEach((screenshotName) => {
        const info = analyzeScreenshotName(screenshotName);
        const { templateName, widgetName, cmpFlavour, device, size } = info;

        const uploadMetadata = uploadResponse[screenshotName];
        const { mediaLink } = uploadMetadata;

        const xPathDefinitions = [
            'screenshots',
            templateName,
            widgetName,
            cmpFlavour,
            device,
            size,
        ].join('.');

        const mediaLinkClean = mediaLink.replace(/\?.+$/g, '');

        set(definitions, xPathDefinitions + '.url', mediaLinkClean + '?alt=media'); // prettier-ignore
        set(definitions, xPathDefinitions + '.urlIsRemote', true);
    });

    Object.keys(definitions.screenshots).forEach((templateName) => {
        const screenshotsByWidget = definitions.screenshots[templateName];
        const dimensionsByWidget = definitions.dimensions[templateName];

        Object.keys(screenshotsByWidget).forEach((widgetName) => {
            const screenshotsForWidget = screenshotsByWidget[widgetName];
            const dimensionsForWidget = dimensionsByWidget[widgetName];
            const { cmpName } = widgetNameToCmp(widgetName);

            const outputIndexScreenshots = `../../${packagePath}/src/templates/${templateName}/widgets/${widgetName}/meta/${cmpName}.screenshots.ts`;
            const indexScreenshots = templateScreenshot(screenshotsForWidget);
            fs.writeFileSync(outputIndexScreenshots, indexScreenshots);

            const indexDimensions = templateDimensions(dimensionsForWidget);
            const outputIndexDimensions = `../../${packagePath}/src/templates/${templateName}/widgets/${widgetName}/meta/${cmpName}.dimensions.ts`;
            fs.writeFileSync(outputIndexDimensions, indexDimensions);
        });
    });

    if (DEBUG) {
        fs.writeFileSync('./debug.uploadResponse.json', JSON.stringify(uploadResponse, null, 4)); // prettier-ignore
        fs.writeFileSync('./debug.definitions.json', JSON.stringify(definitions, null, 4)); // prettier-ignore
    }
};

const screenShotsForPackage = async (method: any, packagePath: string) => {
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.mkdirSync(OUTPUT_DIR);

    definitions = {};

    const libraryBuilder = new LibraryBuilder();
    method(libraryBuilder);
    widgets = libraryBuilder.build().widgets;

    for (let widget of Object.values(widgets)) {
        await screenShotsForComponent(widget);
    }

    const uploadResponse = await uploadAllScreenshots();
    await writeDefinitionsFiles(uploadResponse, packagePath);
    await delay(2000);
};

const run = async () => {
    console.time('opening browser');
    const browser = await chromium.launch({});
    const contextDesktop = await browser.newContext({
        viewport: { width: 1920, height: 1280 },
    });
    pageDesktop = await contextDesktop.newPage();
    await pageDesktop.goto('http://localhost:5000');

    const contextMobile = await browser.newContext({
        viewport: { width: 375, height: 812 },
        isMobile: true,
    });
    pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://localhost:5000');

    console.timeEnd('opening browser');

    await screenShotsForPackage(initTemplatesBasic, 'gdi-template-basic');
    await screenShotsForPackage(
        initTemplatesMinimalist,
        'gdi-template-minimalist'
    );
    await screenShotsForPackage(initTemplatesBlog, 'gdi-template-blog');

    await browser.close();
};

run();

const delay = (duration: number) =>
    new Promise((resolve) => setTimeout(resolve, duration));
