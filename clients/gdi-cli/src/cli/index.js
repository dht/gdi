const chalk = require('chalk');
const packages = require('./packages');
const cli = require('./cli');
const commands = require('./commands');
const setup = require('./setup');
const config = require('./config');
const { collectionsPath } = require('./paths');

const rootCwd = __dirname;

const pay = (argv) => {
    const shortcut = argv._.shift();

    const command = commands.findCommand(shortcut);

    if (!command) {
        console.log(chalk.red(`command ${shortcut} not recognized.`));
        return;
    }

    cli.runCommand(collectionsPath, command, argv).catch((err) => {
        console.log(chalk.red(err.message));
    });
};

const enable = (collectionId) => {
    try {
        config.enable(collectionId);
        setup.rebuild();
        pay(['collections']);
    } catch (err) {
        console.log(chalk.red(err.message));
    }
};

const disable = (collectionId) => {
    try {
        config.disable(collectionId);
        setup.rebuild();
        pay(['collections']);
    } catch (err) {
        console.log(chalk.red(err.message));
    }
};

const version = () => {
    packages.printVersion(rootCwd);
};

module.exports = {
    pay,
    enable,
    disable,
    rebuild: setup.rebuild,
    version,
};
