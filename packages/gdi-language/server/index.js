const express = require('express');
const app = express();
const fs = require('fs-extra');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const prettier = require('prettier');

const port = 3005;

const projects = fs.readJsonSync('./projects.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const queue = [];

app.post('/i18n', (req, res) => {
    const { appId, key } = req.body;

    if (!key || key.includes('$')) {
        return;
    }

    queue.push({
        language: 'en',
        appId,
        key,
    });

    res.send('');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

setInterval(() => {
    parseQueue();
}, 100);

const parseQueue = () => {
    if (queue.length === 0) {
        return;
    }

    const newKey = queue.shift();
    const { language, appId, key } = newKey;

    const project = Object.values(projects).find((i) => i.id === appId);

    if (!project) {
        console.log(`Project ${appId} not found`);
        return;
    }

    const { i18n } = project;

    const filepath = path.resolve(
        `../../../${project.path}/${i18n}/i18n.${language}.ts`
    );
    const exists = fs.existsSync(filepath);

    if (!exists) {
        console.log(`File ${filepath} not found`);
        return;
    }

    const contentRaw = fs.readFileSync(filepath, 'utf8');
    const contentCode = contentRaw.replace('export default', 'return');
    const content = new Function(contentCode)();

    if (content[key]) {
        return;
    }

    console.log(`Adding key '${key}' to ${language}/${appId}`);
    content[key] = key;

    const contentFormatted = prettier.format(
        `export default ${JSON.stringify(content, null, 4)}`,
        {
            parser: 'babel-ts',
            trailingComma: 'es5',
            tabWidth: 4,
            semi: true,
            singleQuote: true,
            jsxSingleQuote: true,
            endOfLine: 'auto',
            useTabs: false,
        }
    );

    fs.writeFileSync(filepath, contentFormatted);
};
