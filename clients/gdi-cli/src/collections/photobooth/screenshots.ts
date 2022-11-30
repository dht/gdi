// shortcuts: screenshot, screenshots
// desc: takes screenshots for current template
import fs from 'fs-extra';
import { chromium, Page } from 'playwright';
import * as photoBooth from '@gdi/photo-booth';
import { initFirebaseAdmin } from '../../utils/firestore';

const OUTPUT_DIR = './screenshots';

const run = async () => {
    await takeScreenShots();
    await uploadAllScreenshots();
    await writeDefinitionsFiles();
};

const uploadAllScreenshots = async () => {
    const bucket = await initFirebaseAdmin();

    const files = fs
        .readdirSync(OUTPUT_DIR)
        .filter((fileName) => fileName.match(/webp$/));

    console.time('uploading screenshots');

    const uploadResponse = await photoBooth.uploadAllScreenshots(
        OUTPUT_DIR,
        files,
        bucket
    );

    fs.writeJsonSync(`${OUTPUT_DIR}/uploadResponse.json`, uploadResponse, {
        spaces: 4,
    });

    console.timeEnd('uploading screenshots');
};

const writeDefinitionsFiles = async () => {
    if (!fs.existsSync(`${OUTPUT_DIR}/definitions.json`)) {
        console.log(`no definitions found in ${OUTPUT_DIR}/definitions.json`);
        return;
    }

    if (!fs.existsSync(`${OUTPUT_DIR}/widgets.json`)) {
        console.log(`no widgets found in ${OUTPUT_DIR}/widgets.json`);
        return;
    }

    if (!fs.existsSync(`${OUTPUT_DIR}/uploadResponse.json`)) {
        console.log(
            `no uploadResponse found in ${OUTPUT_DIR}/uploadResponse.json`
        );
        return;
    }

    const definitions = fs.readJsonSync(`${OUTPUT_DIR}/definitions.json`);
    const widgets = fs.readJsonSync(`${OUTPUT_DIR}/widgets.json`);
    const uploadResponse = fs.readJsonSync(`${OUTPUT_DIR}/uploadResponse.json`);

    console.time('updating meta data');
    photoBooth.writeDefinitionsFiles(
        uploadResponse,
        definitions,
        widgets,
        true
    );
    console.timeEnd('updating meta data');

    photoBooth.updateNodes(widgets);
};

const takeScreenShots = async () => {
    let pageDesktop: Page, pageMobile: Page;

    console.time('opening browser');
    const browser = await chromium.launch({});
    const contextDesktop = await browser.newContext({
        viewport: { width: 1920, height: 1280 },
    });
    pageDesktop = await contextDesktop.newPage();
    await pageDesktop.goto('http://localhost:3002');

    const contextMobile = await browser.newContext({
        viewport: { width: 375, height: 812 },
        isMobile: true,
    });
    pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://localhost:3002');

    const dataRaw = await pageDesktop.inputValue('textarea');
    const dataJson = JSON.parse(dataRaw);

    console.timeEnd('opening browser');

    console.time('taking screenshots');

    const definitions = await photoBooth.screenshotsForWidgets(
        dataJson as IWidgets,
        {
            pageDesktop,
            pageMobile,
        },

        OUTPUT_DIR
    );

    console.timeEnd('taking screenshots');

    fs.writeJsonSync(`${OUTPUT_DIR}/definitions.json`, definitions, { spaces: 4 }); // prettier-ignore
    fs.writeJsonSync(`${OUTPUT_DIR}/widgets.json`, dataJson, { spaces: 4 });

    await pageDesktop.close();
    await pageMobile.close();
    await browser.close();
};

run();
