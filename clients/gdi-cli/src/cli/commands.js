const fs = require('fs-extra');
const chalk = require('chalk');
const { indexJsonPath } = require('./paths');

const getCommands = () => {
    if (!fs.existsSync(indexJsonPath)) {
        console.log(chalk.red('commands index not found, try rebuilding'));
        return;
    }

    return fs.readJSONSync(indexJsonPath);
};

const shortcutToCommandId = () => {
    const commands = getCommands();
    if (!commands) return {};

    return Object.keys(commands).reduce((output, commandId) => {
        const { shortcuts = [] } = commands[commandId];
        shortcuts.forEach((shortcut) => {
            output[shortcut] = commandId;
        });
        return output;
    }, {});
};

const findCommand = (shortcut) => {
    const commands = getCommands();
    if (!commands) return null;

    const map = shortcutToCommandId();

    const commandId = map[shortcut];

    if (commandId) {
        console.log(chalk.magenta(commandId));
    }

    return commands[commandId];
};

module.exports = {
    getCommands,
    findCommand,
};
