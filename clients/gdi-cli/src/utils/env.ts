import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import snakeCase from 'lodash/snakeCase';

const cobolCase = (str: string) =>
    snakeCase(str).replace(/-/g, '_').toUpperCase();

export const readEnv = (cwd: string, requiredKeys: string[] = []) => {
    const output = {
        success: true,
        content: {} as Json,
        error: '',
    };

    const envPath = path.resolve(cwd, '.env');

    const envExists = fs.existsSync(envPath);

    if (!envExists) {
        output.success = false;
        output.error = `could not find '.env' file in ${chalk.yellow(cwd)}`;
        return output;
    }

    const contentRaw = fs.readFileSync(envPath).toString();
    const contentLines = contentRaw.split('\n');
    const content = contentLines.reduce((output, line) => {
        const parts = line.split('=');
        output[parts[0]] = parts[1];
        return output;
    }, {} as Json);

    const missingKeys = checkMissingKeys(content, requiredKeys);
    output.content = content;

    if (missingKeys.length > 0) {
        output.success = false;
        output.error = `missing in .env file:\n  - ${missingKeys.join(
            '\n  - '
        )}`;
        return output;
    }

    return output;
};

export const readEnvVite = (cwd: string) => {
    return readEnv(cwd, [
        'VITE_FIREBASE_API_KEY',
        'VITE_FIREBASE_AUTH_DOMAIN',
        'VITE_FIREBASE_DATABASE_URL',
        'VITE_FIREBASE_PROJECT_ID',
        'VITE_FIREBASE_STORAGE_BUCKET',
        'VITE_FIREBASE_MESSAGING_SENDER_ID',
        'VITE_FIREBASE_APP_ID',
    ]);
};

export const writeEnvVite = (cwd: string, config: Json, extra: Json = {}) => {
    const envContent = configToViteEnv(config);

    const extraString = Object.keys(extra)
        .reduce((output, key) => {
            const keyVite = cobolCase(`vite-${key}`);
            output.push(`${keyVite}=${extra[key]}`);
            return output;
        }, [] as string[])
        .join('\n');

    fs.writeFileSync(cwd + '/.env', envContent + '\n' + extraString);
};

const configToViteEnv = (firebaseConfig: Json) => {
    const {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        measurementId,
    } = firebaseConfig;

    return `VITE_FIREBASE_API_KEY=${apiKey}
VITE_FIREBASE_AUTH_DOMAIN=${authDomain}
VITE_FIREBASE_DATABASE_URL=https://${projectId}.firebaseio.com
VITE_FIREBASE_PROJECT_ID=${projectId}
VITE_FIREBASE_STORAGE_BUCKET=${storageBucket}
VITE_FIREBASE_MESSAGING_SENDER_ID=${messagingSenderId}
VITE_FIREBASE_APP_ID=${appId}
VITE_FIREBASE_MEASUREMENT_ID=${measurementId}
`;
};

const checkMissingKeys = (object: Json, keys: string[]) => {
    const output: string[] = [];

    keys.forEach((key) => {
        if (typeof object[key] === 'undefined') {
            output.push(key);
        }
    });

    return output;
};

export const envError = (message: string) => {
    console.log(chalk.red(message));
    console.log(
        'generate an .env file with the following format:\n' +
            JSON.stringify(
                {
                    VITE_FIREBASE_API_KEY: '',
                    VITE_FIREBASE_AUTH_DOMAIN: '',
                    VITE_FIREBASE_DATABASE_URL: '',
                    VITE_FIREBASE_PROJECT_ID: '',
                    VITE_FIREBASE_STORAGE_BUCKET: '',
                    VITE_FIREBASE_MESSAGING_SENDER_ID: '',
                    VITE_FIREBASE_APP_ID: '',
                },
                null,
                4
            )
    );
};
