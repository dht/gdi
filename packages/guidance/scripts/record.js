const { clearDir } = require('./utils/recordings');
const { startPlaywright } = require('./utils/playwright');
const { loadContext } = require('./utils/context');

let context, page;

const run = async () => {
  console.time('record');
  clearDir();

  const res = await startPlaywright();
  context = res.context;
  page = res.page;

  // Perform any actions you want to record here
  // For example, you can simulate clicking on a button, filling out a form, etc.

  // Wait for a moment to record some interaction

  // Close the page

  // onClose save cookies and local storage

  // save recording
  //wait 10 seconds

  // await page.close();

  // // Stop recording and close the browser
  // await context.close();
  // await browser.close();
  console.timeEnd('record');
};

run();
