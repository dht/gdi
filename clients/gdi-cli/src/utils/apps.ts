import { Json } from '../types';
import * as fs from 'fs-extra';
import _ from 'lodash';
import { addCompilerOptionsPaths, addViteAlias } from './configFiles';

export const addAppToTsConfig = (tsconfigPath: string, appId: string) => {
    const change = {
        [`@gdi/app-${appId}`]: [`apps/${appId}`],
    };

    addCompilerOptionsPaths(tsconfigPath, change);
};

export const addAppToViteConfig = (vitePath: string, appId: string) => {
    const key = `'@gdi/app-${appId}'`;
    const value = `\`\${cwd}/apps/${appId}\``;

    addViteAlias(vitePath, key, value);
};

export const updatePlatformSaga = (sagaPath: string, newAppId: string) => {
    if (!fs.existsSync(sagaPath)) {
        console.log(`could not find platform saga in ${sagaPath}`);
        return;
    }

    let data = fs.readFileSync(sagaPath).toString();

    const withPrefix = `app-${newAppId}`;
    const packageName = `@gdi/${withPrefix}`;
    const upperFirst = _.upperFirst(newAppId);

    // 1. add import
    const importLine = `import { initApp as init${upperFirst} } from '${packageName}';`;

    if (data.includes(withPrefix)) {
        console.log(`app ${newAppId} already exists on platform saga`);
        return;
    }

    data = data.replace('import', `${importLine}\nimport`);

    // 2. add to AllApps type
    const typeLine = `  ${newAppId}: InitAppMethod,`;
    data = data.replace('type AllApps = {', `type AllApps = {\n  ${typeLine}`);

    // 3. add to activeApps
    const activeAppsLine = `    '${newAppId}',`;
    data = data.replace(
        'const activeApps: AppId[] = [',
        `const activeApps: AppId[] = [\n${activeAppsLine}`
    );

    // 4. add to allApps
    const allAppsLine = `  ${newAppId}: init${upperFirst},`;
    data = data.replace(
        'const allApps: AllApps = {',
        `const allApps: AllApps = {\n${allAppsLine}`
    );

    fs.writeFileSync(sagaPath, data);
};

export const replaceBootstrapRedirect = (
    bootstrapPath: string,
    appId: string
) => {
    if (!fs.existsSync(bootstrapPath)) {
        console.log(`could not find Bootstrap.tsx in ${bootstrapPath}`);
        return;
    }

    let data = fs.readFileSync(bootstrapPath).toString();

    const redirectLine = `<Redirect to='/${appId}' />`;
    data = data.replace(/<Redirect to='[/a-z]+' \/>/i, redirectLine);

    fs.writeFileSync(bootstrapPath, data);
};
