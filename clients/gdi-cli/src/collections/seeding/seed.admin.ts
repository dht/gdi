// shortcuts: seedAdmin
// desc: make an existing user an admin
import chalk from 'chalk';
import { autoComplete } from '../../utils/prompt';
import { envError, readEnvVite } from '../../utils/env';
import { parseArgv } from '../../utils/argv';
import {
    collectionGet,
    collectionPatchItem,
    initFirebaseVite,
} from '../../utils/firestore';

const argv = parseArgv(process.argv);
const { cwd } = argv;

// ================================================

const run = async () => {
    const envResult = readEnvVite(cwd);

    if (!envResult.success) {
        envError(envResult.error);
        return;
    }

    initFirebaseVite(envResult.content);

    const users = await collectionGet('users');

    const choices = users
        .map((user) => user.email)
        .filter((email) => !email.match(/example\.com$/));

    const answer = await autoComplete(
        'Choose the user to make an admin:',
        choices
    );

    const user = users.find((i) => i.email === answer);

    if (!user) {
        generalError(`could not find user ${answer}`);
        return;
    }

    const { id } = user;

    await collectionPatchItem('roles', id, {
        id,
        role: 'admin',
    });

    console.log(chalk.green('done'));
};

const generalError = (message: string) => {
    console.log(chalk.red(message));
};

run();
