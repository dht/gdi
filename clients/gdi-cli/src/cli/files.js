const fs = require('fs-extra');

const generateMetaFolder = (cwd) => {
    const root = `${cwd}/.meta`;

    if (!fs.pathExistsSync(root)) {
        fs.mkdirSync(root);
    }

    return root;
};

module.exports = {
    generateMetaFolder,
};
