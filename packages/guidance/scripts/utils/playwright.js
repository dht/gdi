const { chromium } = require('playwright'); // Import chromium or you can use firefox or webkit
const { saveContext, loadContext } = require('./context');

const aspectRatio = 16 / 9;
const videoWidth = 1600;
const videoHeight = videoWidth / aspectRatio;

const startPlaywright = async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  // Create a context with the recordVideo option
  context = await browser.newContext({
    viewport: {
      width: videoWidth,
      height: videoHeight,
    },
    recordVideo: {
      dir: './videos', // Directory where videos will be saved
      size: {
        width: videoWidth,
        height: videoHeight,
      },
    },
  });

  await context.addInitScript({
    path: '../../../node_modules/mouse-helper/dist/mouse-helper.js',
  });

  // Open a new page
  page = await context.newPage();

  // Navigate to the desired URL
  await page.goto('http://localhost:3000');
  loadContext(context);

  await page.evaluate(() => {
    window['mouse-helper']();
  });

  setTimeout(() => {
    console.log('saving context');
    // saveContext(context);
  }, 10000);

  return {
    browser,
    context,
    page,
  };
};

module.exports = {
  startPlaywright,
};
