const fs = require('fs-extra');

const arr = ['1', '2', '3', '4'];

const run = async () => {
  const files = (await fs.readdir('../temp/db/contacts')).filter((i) => i.endsWith('.json'));

  let count = 0;

  files.forEach((file) => {
    const filePath = `../temp/db/contacts/${file}`;
    const content = fs.readJsonSync(filePath);
    const { tier } = content;

    if (!arr.includes(tier)) {
      content.tier = '4';
      count = count + 1;
      fs.writeJsonSync(filePath, content, { spaces: 2 });
    }
  });
};

run();
