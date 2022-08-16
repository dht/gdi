import * as fs from 'fs';
import * as sharp from 'sharp';
import { chromium, Page } from 'playwright';
import { Json } from './types';
import { set } from 'lodash';
import { templateDimensions, templateScreenshot } from './templates';
import { templates } from '@gdi/template-gdi';
import type { OutputInfo } from 'sharp';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import type { UploadResponse } from '@google-cloud/storage';
import { Metadata } from '@playwright/test';

var serviceAccount = require('./service-account.json');

initializeApp({
    credential: cert(serviceAccount),
    databaseURL: 'https://amazing-de4d0.firebaseio.com',
    storageBucket: 'gs://amazing-de4d0.appspot.com',
});

const bucket = getStorage().bucket();

type GenerateFilenameOptions = {
    templateName: string;
    blockName: string;
    flavour: string;
    size: 'raw' | 'thumb' | 'large';
    isDesktop: boolean;
    fileType: 'png' | 'webp';
};

const generateFileName = (options: GenerateFilenameOptions) => {
    const { templateName, blockName, flavour, size, isDesktop, fileType } =
        options;

    return [
        'screenshot',
        templateName,
        blockName,
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
    blockName: string;
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

const takePicture = async (
    page: Page,
    options: TakePictureOptions
): Promise<TakePictureResponse> => {
    const output = {
        raw: { width: 10, height: 10, ratio: 1 },
        large: { width: 10, height: 10, ratio: 1 },
        thumb: { width: 10, height: 10, ratio: 1 },
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
    let uploadResponse: UploadResponse, metadata: Metadata;

    const { flavour, selector, isDesktop, root, templateName, blockName } =
        options;

    const base = {
        root,
        flavour,
        isDesktop,
        templateName,
        blockName,
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
    uploadResponse = await bucket.upload(screenshotRawPath, {
        public: true,
    });
    metadata = uploadResponse[1];
    output.urls.large = metadata.mediaLink;

    await resizeImage(
        screenshotRawPath,
        isDesktop ? 400 : 200,
        screenshotThumbPath
    );
    output.thumb.width = info.width;
    output.thumb.height = info.height;
    output.thumb.ratio = info.width / info.height;
    output.fileNames.thumb = screenshotThumbFileName;
    uploadResponse = await bucket.upload(screenshotThumbPath, {
        public: true,
    });
    metadata = uploadResponse[1];
    output.urls.thumb = metadata.mediaLink;

    return output;
};

const screenShotsForComponent = async (
    templateName: string,
    blockName: string,
    cmpName: string
) => {
    const blockKey = `com.useGdi.templates.${templateName}.${blockName}`;
    const block = templates.gdi.blocks[blockKey];
    const outputDir = './screenshots/';
    const outputIndexScreenshots = `../../gdi-template-gdi/src/templates/${templateName}/blocks/${blockName}/meta/${cmpName}.screenshots.ts`;
    const outputIndexDimensions = `../../gdi-template-gdi/src/templates/${templateName}/blocks/${blockName}/meta/${cmpName}.dimensions.ts`;
    fs.rmdirSync(outputDir, { recursive: true });

    const outputDimensions: Json = {},
        outputScreenshots: Json = {};

    const browser = await chromium.launch({});
    const contextDesktop = await browser.newContext({
        viewport: { width: 1920, height: 1280 },
    });
    const pageDesktop = await contextDesktop.newPage();
    await pageDesktop.goto('http://localhost:5000');

    const contextMobile = await browser.newContext({
        viewport: { width: 375, height: 812 },
        isMobile: true,
    });
    const pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://localhost:5000');

    for (let flavour of Object.keys(block.info.sampleData)) {
        console.log('flavour ->', flavour);

        const base = {
            root: outputDir,
            templateName,
            blockName,
            flavour,
            selector: `.Chair-container > .photoBooth-flavour-${flavour} > div`,
        };

        const responseDesktop = await takePicture(pageDesktop, {
            ...base,
            isDesktop: true,
        });

        const responseMobile = await takePicture(pageMobile, {
            ...base,
            isDesktop: false,
        });

        set(outputScreenshots, `${flavour}.desktop.large`, {...responseDesktop.large}); // prettier-ignore
        set(outputScreenshots, `${flavour}.desktop.large.url`, responseDesktop.urls.large); // prettier-ignore
        set(outputScreenshots, `${flavour}.desktop.large.urlIsRemote`, true); // prettier-ignore
        set(outputScreenshots, `${flavour}.desktop.thumb`, {...responseDesktop.thumb}); // prettier-ignore
        set(outputScreenshots, `${flavour}.desktop.thumb.url`, responseDesktop.urls.thumb); // prettier-ignore
        set(outputScreenshots, `${flavour}.desktop.thumb.urlIsRemote`, true); // prettier-ignore
        set(outputScreenshots, `${flavour}.mobile.large`, {...responseMobile.large}); // prettier-ignore
        set(outputScreenshots, `${flavour}.mobile.large.url`, responseMobile.urls.large); // prettier-ignore
        set(outputScreenshots, `${flavour}.mobile.large.urlIsRemote`, true); // prettier-ignore
        set(outputScreenshots, `${flavour}.mobile.thumb`, {...responseMobile.thumb}); // prettier-ignore
        set(outputScreenshots, `${flavour}.mobile.thumb.url`, responseMobile.urls.thumb); // prettier-ignore
        set(outputScreenshots, `${flavour}.mobile.thumb.urlIsRemote`, true); // prettier-ignore

        set(outputDimensions, `${flavour}.desktop`, responseDesktop.large); // prettier-ignore
        set(outputDimensions, `${flavour}.mobile`, responseMobile.large); // prettier-ignore
    }

    const indexScreenshots = templateScreenshot(outputScreenshots);
    const indexDimensions = templateDimensions(outputDimensions);

    fs.writeFileSync(outputIndexScreenshots, indexScreenshots);
    fs.writeFileSync(outputIndexDimensions, indexDimensions);

    await browser.close();
};

const run = async () => {
    const templateName = 'gdi';
    const blockName = 'hero-simple';
    const cmpName = 'Hero';

    await screenShotsForComponent(templateName, blockName, cmpName);
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

run();
