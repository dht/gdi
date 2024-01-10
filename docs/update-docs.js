const fs = require('fs-extra');
const { sortBy } = require('shared-base');

const run = async () => {
  const categories = [];
  const docs = [];

  // only dirs
  const dirs = fs.readdirSync('.').filter((file) => {
    return fs.statSync(file).isDirectory();
  });

  dirs.forEach((dir) => {
    const info = fs.readJsonSync(`${dir}/_index.json`);

    categories.push({
      id: dir,
      ...info,
    });

    const files = fs
      .readdirSync(dir)
      .filter((file) => file !== '_index.json')
      .sort()
      .map((fileName) => {
        const path = `${dir}/${fileName}`;
        const content = fs.readFileSync(path).toString();

        return {
          fileName,
          dir,
          path,
          content,
        };
      });

    files.forEach((file) => {
      const { content, dir: category } = file;
      const regex = /# ?([a-z ]+)$/gim;
      const match = regex.exec(content);

      const title = match ? match[1] : '';

      delete file.content;
      delete file.dir;

      docs.push({
        ...file,
        category,
        title,
      });
    });
  });

  // get initial doc
  categories.sort(sortBy('order'));
  const firstCategory = categories[0];
  const firstDoc = docs.find((doc) => doc.category === firstCategory.id);

  fs.writeJsonSync(
    './index.json',
    {
      initialDoc: firstDoc.path,
      categories,
      docs,
    },
    { spaces: 2 }
  );

  console.log(`done writing docs.json with ${docs.length} docs`);
};

run();
