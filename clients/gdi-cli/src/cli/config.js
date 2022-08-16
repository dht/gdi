const fs = require('fs-extra');
const chalk = require('chalk');
const { configPath, collectionsPath } = require('./paths');

const getConfig = () => {
    if (!fs.existsSync(configPath)) {
        console.log(chalk.cyan('config not found, creating default'));
        fs.writeJsonSync(configPath, { global: true });
    }

    return fs.readJSONSync(configPath);
};

const patchConfig = (enabled) => {
    const config = getConfig();

    fs.writeJSONSync(
        configPath,
        {
            enabled: {
                ...config.enabled,
                ...enabled,
            },
        },
        { spaces: 4 }
    );
};

const collectionExists = (collectionId) => {
    return fs.existsSync(`${collectionsPath}/${collectionId}`);
};

const enable = (collectionId) => {
    if (!collectionExists(collectionId)) {
        throw new Error(`collection '${collectionId}' does not exist`);
    }

    console.log(
        chalk.magenta('enabling collection ') + chalk.grey(collectionId)
    );
    patchConfig({ [collectionId]: true });
    console.log(chalk.cyan('enabled.'));
};

const disable = (collectionId) => {
    if (!collectionExists(collectionId)) {
        throw new Error(`collection '${collectionId}' does not exist`);
    }

    console.log(
        chalk.magenta('disabling collection ') + chalk.grey(collectionId)
    );
    patchConfig({ [collectionId]: false });
    console.log(chalk.cyan('disabled.'));
};

module.exports = {
    getConfig,
    patchConfig,
    enable,
    disable,
};
