const fs = require('fs-extra');
const chalk = require('chalk');
const files = require('./files');

const getPackage = (path) => {
    let json = {};

    try {
        json = fs.readJSONSync(path + '/package.json');
    } catch (e) {}

    return json;
};

const savePackage = (path, json) => {
    return fs.writeJSONSync(path + '/package.json', json, { spaces: 4 });
};

const getVersionInfo = (packageJson) => {
    const version = packageJson.version;

    return {
        version,
    };
};

const getDependencies = (packageJson) => {
    const dependencies = packageJson.dependencies;
    return Object.keys(dependencies);
};

const saveVersion = (path, json, version) => {
    json.version = version;
    savePackage(path, json);
};

const printVersion = (path) => {
    const p = getPackage(path);
    console.log(`Al ${chalk.cyan(p.version)} ${chalk.gray("(" + path + ")")}`); // prettier-ignore
};

const getAllPackageInDirectoryTree = (path) => {
    return files
        .getFiles('**/*', {
            cwd: path,
        })
        .filter((file) => file.base === 'package.json')
        .map((file) => {
            const content = getPackage(file.dir);
            return { ...file, content };
        });
};

module.exports = {
    getAllPackageInDirectoryTree,
    getVersionInfo,
    getDependencies,
    saveVersion,
    printVersion,
};
