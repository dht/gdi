const path = require('path');

const root = path.resolve(__dirname + '/../');
const collectionsPath = path.join(root, 'collections');
const indexJsonPath = path.join(collectionsPath, 'index.json');
const configPath = path.join(collectionsPath, 'config.json');

module.exports = {
    root,
    collectionsPath,
    indexJsonPath,
    configPath,
};
