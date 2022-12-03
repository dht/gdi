const fs = require('fs');
const globby = require('globby');

const packagesGlobs = [
    './apps/*',
    './clients/*',
    './extra/stores/*',
    './extra/apps/*',
    './packages/*',
    './servers/*',
    './stores/*',
    './templates/*',
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
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: 16
            - run: npm ci
            - run: npm run build
              working-directory: ${path}/
            - run: npm publish
              working-directory: ${path}/
              env:
                  NODE_AUTH_TOKEN: \${{secrets.NPM_TOKEN}}
`;

run();
