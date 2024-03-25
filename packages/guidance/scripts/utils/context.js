const fs = require('fs-extra');
const path = require('path');

const ROOT = path.resolve(__dirname, '../');
console.log('ROOT ->', ROOT);

const saveContext = async (context) => {
  const cookies = await context.cookies();

  fs.writeJsonSync(`${ROOT}/context/cookies.json`, cookies, { spaces: 2 });

  // Save local storage
  const localStorageData = await page.evaluate(() => {
    return JSON.stringify(window.localStorage);
  });

  fs.writeJsonSync(`${ROOT}/context/localStorage.json`, JSON.parse(localStorageData), {
    spaces: 2,
  });
};

const loadContext = async (context) => {
  // Load cookies
  const cookies = fs.readJsonSync(`${ROOT}/context/cookies.json`);
  await context.addCookies(cookies);

  // Load local storage
  const localStorageData = fs.readJsonSync(`${ROOT}/context/localStorage.json`);

  await page.evaluate((localStorageData) => {
    window.localStorage = localStorageData;
  }, localStorageData);
};

module.exports = {
  saveContext,
  loadContext,
};
