import fs from 'fs-extra';
import path from 'path';
import capitalize from 'lodash/capitalize';
import set from 'lodash/set';
import get from 'lodash/get';
import { formatCode } from './code';

export const writeDefinitionsFiles = async (
    uploadResponse: Record<string, Json>,
    definitions: Json,
    widgets: IWidgets,
    debug?: boolean
) => {
    Object.keys(uploadResponse).forEach((screenshotName) => {
        const info = analyzeScreenshotName(screenshotName);
        const { templateName, widgetName, sampleName, device, size } = info;

        const uploadMetadata = uploadResponse[screenshotName];
        const { mediaLink } = uploadMetadata;

        const xPathDefinitions = [
            'screenshots',
            templateName,
            widgetName,
            sampleName,
            device,
            size,
        ].join('.');

        const dimensions = get(definitions, xPathDefinitions);
        const { width, height, ratio } = dimensions ?? {};

        const mediaLinkClean = mediaLink.replace(/\?.+$/g, '');

        set(definitions, xPathDefinitions + '.url', mediaLinkClean + '?alt=media'); // prettier-ignore
        set(definitions, xPathDefinitions + '.urlIsRemote', true);
        set(definitions, xPathDefinitions + '.width', width);
        set(definitions, xPathDefinitions + '.height', height);
        set(definitions, xPathDefinitions + '.ratio', ratio);
    });

    Object.keys(definitions.screenshots).forEach((templateName) => {
        const screenshotsByWidget = definitions.screenshots[templateName];
        const dimensionsByWidget = definitions.dimensions[templateName];

        Object.keys(screenshotsByWidget).forEach((widgetName) => {
            const screenshotsForWidget = screenshotsByWidget[widgetName];
            const dimensionsForWidget = dimensionsByWidget[widgetName];

            const { cmpName } = widgetNameToCmp(widgetName);

            const widget = Object.values(widgets).find(
                (w) => w.name === widgetName
            );

            const isBlock = widget?.isBlock;
            const folderName = isBlock ? 'blocks' : 'widgets';

            const outputIndexScreenshots = `./src/${folderName}/${widgetName}/meta/${cmpName}.screenshots.ts`;
            const indexScreenshots = templateScreenshot(screenshotsForWidget);
            fs.writeFileSync(outputIndexScreenshots, indexScreenshots);

            const indexDimensions = templateDimensions(dimensionsForWidget);
            const outputIndexDimensions = `./src/${folderName}/${widgetName}/meta/${cmpName}.dimensions.ts`;
            fs.writeFileSync(outputIndexDimensions, indexDimensions);
        });
    });

    if (debug) {
        fs.writeJsonSync('debug.definitions.json', definitions);
    }
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

const widgetNameToCmp = (widgetName: string) => {
    const [cmpNameLowercase, cmpFlavour] = widgetName.split('-');

    return {
        cmpName: capitalize(cmpNameLowercase),
        cmpFlavour,
    };
};

export const templateScreenshot = (json: Json) => {
    const code = `

    export const screenshots: IScreenshotsPerFlavour = ${JSON.stringify(
        json,
        null,
        4
    )};
    `;

    return formatCode(code);
};

export const templateDimensions = (json: Json) => {
    const code = `

    export const dimensions: IDimensionsPerFlavour = ${JSON.stringify(
        json,
        null,
        4
    )};
    `;

    return formatCode(code);
};

export const templateWidgets = (varName: string, json: Json) => {
    const code = `

    export const ${varName}: IWidgets = ${JSON.stringify(json, null, 4)};
    `;

    return formatCode(code);
};

export const updateNodes = (widgets: IWidgets) => {
    const root = '../../submodules/gdi-datasets/src/nodes-seed';
    const rootExists = fs.pathExistsSync(root);

    if (!rootExists) {
        return;
    }

    console.time('updating nodes');

    const filepathWidgets = '/site/node.widgets.ts';
    fs.writeFileSync(
        `${root}${filepathWidgets}`,
        templateWidgets('widgets', shrinkWidgets(widgets))
    );

    const filepathLibraryWidgets = '/mixer/node.libraryWidgets.ts';
    fs.writeFileSync(
        `${root}${filepathLibraryWidgets}`,
        templateWidgets('libraryWidgets', widgets)
    );
    console.timeEnd('updating nodes');
};

export const shrinkWidgets = (widgets: IWidgets): Json => {
    return Object.values(widgets).reduce((output: Json, widget: any) => {
        const slimWidget = {
            ...widget,
        };

        delete slimWidget['dimensions'];
        delete slimWidget['params'];
        delete slimWidget['sampleData'];
        delete slimWidget['screenshots'];

        output[slimWidget.id] = slimWidget;

        return output;
    }, {});
};
