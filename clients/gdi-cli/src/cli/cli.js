const path = require('path');
const child = require('child_process');
const chalk = require('chalk');

const { SCRIPT_TYPES } = require('./types');

const runCommand = (collectionsPath, command, argv) => {
    const { type, collection, file } = command;
    const filePath = `${collectionsPath}/${collection}/${file}`;
    const withWatch = argv['watch'];

    let cwd = path.resolve('.'),
        exec,
        args;

    switch (type) {
        case SCRIPT_TYPES.BASH:
            args = [...argv._, cwd, JSON.stringify(argv)];
            exec = filePath;
            break;
        case SCRIPT_TYPES.NODE:
            args = [JSON.stringify({ ...argv, cwd })];
            exec = 'node';
            args.unshift(filePath);

            if (withWatch) {
                exec = 'nodemon';
                args.push(...['-w', filePath]);
            }

            break;
        case SCRIPT_TYPES.TS_NODE:
            args = [JSON.stringify({ ...argv, cwd })];
            exec = 'ts-node';
            cwd = path.resolve(__dirname, '../..');

            args.unshift(filePath);
            args.unshift('-r', 'tsconfig-paths/register');

            if (withWatch) {
                exec = 'nodemon';
                args.push(...['-w', filePath, '--exec', 'ts-node']);
            }
            break;
        default:
    }

    return run(exec, args, cwd, {
        stdOutMode: true,
    });
};

const run = (command, args = [], cwd, options = {}) => {
    const { debug, stdOutMode = false, silentFail = true } = options;

    return new Promise((resolve, reject) => {
        let data = '';

        if (debug) {
            const cmd = chalk.magenta(command + ' ' + args.join(' '));
            console.log(`${cmd} in path "${chalk.cyan(cwd ?? '')}"`);
        }

        const stdio = stdOutMode ? 'inherit' : null;

        const childProcess = child.spawn(command, args, {
            cwd,
            stdio,
        });

        if (!stdOutMode) {
            childProcess.stdout.on('data', function (str) {
                data += str.toString();
            });
        }

        childProcess.once('exit', (code) => {
            if (code === 0) {
                resolve(data);
            } else {
                if (silentFail) {
                    resolve(data);
                } else {
                    reject(new Error('Exit with error code: ' + code));
                }
            }
        });
    });
};

const exec = (run, cwd, log) => {
    return new Promise((resolve, reject) => {
        let data = '';

        const cmd = chalk.magenta(run);
        log(`${cmd} in path "${chalk.cyan(cwd ?? '')}"\n`);

        const args = run.split(' ');
        const command = args.shift();

        args.push('--color');

        const childProcess = child.spawn(command, args, {
            cwd,
            stdio: ['pipe', 'pipe', 'pipe'],
        });

        childProcess.stdout.on('data', function (str) {
            const line = str.toString('utf8');
            process.stdout.write(line);
            log(line);
            data += line;
        });

        childProcess.stderr.on('data', function (str) {
            const line = str.toString('utf8');
            process.stdout.write(line);
            log(line);
            data += line;
        });

        childProcess.once('exit', (code) => {
            if (code === 0) {
                resolve(data);
            } else {
                reject(data);
            }
        });
    });
};

module.exports = {
    runCommand,
    exec,
    run,
};
