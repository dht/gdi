// shortcuts: setAdmin
// desc: make an existing user an admin
import chalk from 'chalk';
import { autoComplete } from '../../utils/input';
import { envError, readEnvVite } from '../../utils/env';
import { parseArgv } from '../../utils/argv';
import {
    collectionGet,
    collectionPatchItem,
    initFirebaseVite,
} from '../../utils/firestore';
import * as fs from 'fs';

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
        .map((user: any) => user.email)
        .filter((email: string) => !email.match(/example\.com$/));

    const answer = await autoComplete(
        'Choose the user to make an admin:',
        choices
    );

    const user = users.find((i: any) => i.email === answer);

    if (!user) {
        generalError(`could not find user ${answer}`);
        return;
    }

    const { id } = user;

    await collectionPatchItem('roles', id, {
        id,
        role: 'admin',
    });

    updateStorageRules(id);

    console.log(chalk.green('done'));
};

const updateStorageRules = (userId: string) => {
    let pathStorageRules = `${cwd}/storage.rules`;
    if (!fs.existsSync(pathStorageRules)) {
        pathStorageRules = `${cwd}/gdi-admin/storage.rules`;
        if (!fs.existsSync(pathStorageRules)) {
            generalError('ERROR: could not find "storage.rules" in this path');
            return;
        }
    }

    const content = fs.readFileSync(pathStorageRules).toString();
    const newContent = content.replace(
        /request\.auth\.uid == '([a-zA-Z0-9_]+)'/,
        (all: string, match: string) => {
            return all.replace(match, userId);
        }
    );

    fs.writeFileSync(pathStorageRules, newContent);
};

const generalError = (message: string) => {
    console.log(chalk.red(message));
};

run();
