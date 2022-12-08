const fs = require('fs');
const globby = require('globby');

const packagesGlobs = [
    './apps/*',
    './extra/apps/*',
    './extra/stores/*',
    './packages/*',
    './stores/*',
];

const run = () => {
    packagesGlobs.forEach((g) => {
        const dirs = globby.sync([g], {
            onlyDirectories: true,
            cwd: '..',
        });

        dirs.forEach((d) => {
            console.log(d);
            const path = d.replace('./', '');
            const name = d.split('/').pop();
            const content = template(name, path);

            fs.writeFileSync(
                `../.github/workflows/workflow-${name}-publish.yml`,
                content
            );
        });
    });
};

const template = (name, path) => `name: ${name} publish

on:
    push:
        branches:
            - main
        paths:
            - ${path}/**

jobs:
    publish:
        runs-on: ubuntu-22.04
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: '16.x'
                  registry-url: 'https://registry.npmjs.org/'
                  scope: '@gdi'
            - name: Remove root package.json
              run: rm package.json
            - name: Cache node modules
              id: cache-npm
              uses: actions/cache@v3
              env:
                  cache-name: cache-node-modules
              with:
                  path: ~/.npm
                  key: \${{ runner.os }}-build-\${{ env.cache-name }}-\${{ hashFiles('**/package-lock.json') }}
                  restore-keys: |
                      \${{ runner.os }}-build-\${{ env.cache-name }}-
                      \${{ runner.os }}-build-
                      \${{ runner.os }}-
            - if: \${{ steps.cache-npm.outputs.cache-hit != 'true' }}
              name: List the state of node modules
              continue-on-error: true
              run: npm list
              working-directory: ./${path}
            - name: Install dependencies
              run: npm install
              working-directory: ./${path}
            - name: Build
              run: npm run build
              working-directory: ./${path}
            - uses: JS-DevTools/npm-publish@v1
              with:
                  package: ./${path}/package.json
                  token: \${{ secrets.NPM_TOKEN }}
                  access: public
`;

run();
