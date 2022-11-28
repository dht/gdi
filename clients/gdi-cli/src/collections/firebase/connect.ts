// shortcuts: connect
// desc: connect project to Firebase

import chalk from 'chalk';
import { writeEnvVite } from '../../utils/env';
import { parseArgv } from '../../utils/argv';
import * as fs from 'fs-extra';
import * as path from 'path';

const cli = require('../../cli/cli');

const argv = parseArgv(process.argv);
const { cwd } = argv;

// ================================================

const run = async () => {
    const firebaseJsonPath = path.resolve(cwd, 'firebase.json');

    if (!fs.existsSync(firebaseJsonPath)) {
        console.log(
            chalk.red(`could not find "firebase.json" in ${firebaseJsonPath}`)
        );
        return;
    }

    const firebaseConfig = fs.readJsonSync(firebaseJsonPath);
    const { projectId } = firebaseConfig;

    writeEnvVite(`${cwd}/gdi-admin`, firebaseConfig, {
        menu: ['doing', 'site', 'marketing', 'factory', 'shop', 'extra'].join(
            ','
        ),
    });

    writeEnvVite(`${cwd}/gdi-site`, firebaseConfig);
    writeEnvVite(cwd, firebaseConfig);

    const result = await cli.run(
        'firebase',
        ['use', projectId],
        `${cwd}/gdi-admin`
    );

    console.log(result);
};

run();
