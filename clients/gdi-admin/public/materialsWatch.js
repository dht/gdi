const fs = require('fs');
const path = require('path');

fs.watch('.', (eventType, filename) => {
    console.log(filename, '->', eventType);

    if (filename.endsWith('.mtl')) {
        mtlChanged(filename);
    } else if (filename.endsWith('.json')) {
        jsonChanged(filename);
    }
});

const mtlChanged = (filename) => {
    const content = fs.readFileSync(filename, 'utf8');

    const lines = content.split('\n');

    let changesCount = 0;

    const newLines = lines.map((line) => {
        // map_Kd /Users/dht/Documents/ville/textures/tree-bark-2.jpeg
        if (line.startsWith('map_Kd') && line.includes('/Users')) {
            changesCount++;
            const parts = line.split('/');
            const newPath = parts.pop();
            return `map_Kd ${newPath}`;
        } else {
            return line;
        }
    });

    console.log('changesCount ->', changesCount);

    if (changesCount > 0) {
        const newContent = newLines.join('\n');
        fs.writeFileSync(filename, newContent, 'utf8');
    }
};

const jsonChanged = (filename) => {
    const raw = fs.readFileSync(filename);
    const json = JSON.parse(raw);
    const { frames } = json;

    const ids = Object.keys(frames);

    const content = templateEnum(ids) + '\n\n' + templateSizes(json.frames);

    const outputPath = path.resolve(
        '../../../extra/apps/app-studio/src/components/Overview3d/Overview3d.data.ts'
    );

    fs.writeFileSync(outputPath, content);
};

const templateEnum = (values) => {
    const pairs = values.map((value) => {
        return `    '${value}' = '${value}',`;
    });

    return `export enum People {
${pairs.join('\n')}
    };`;
};

const templateSizes = (json) => {
    const output = {};

    Object.keys(json).forEach((id) => {
        const item = json[id];
        const { sourceSize } = item ?? '';
        const { w, h } = sourceSize ?? '';

        output[id] = {
            id,
            width: w,
            height: h,
        };
    });

    return 'export const people = ' + JSON.stringify(output, null, 4);
};
