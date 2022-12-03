const fs = require('fs');

const content = fs.readFileSync('errors.txt', 'utf-8');
const lines = content.split('\n');
const output = [];

const run = () => {
    lines.forEach((line, index) => {
        const isSummary = line.includes('Errors  Files');

        if (isSummary) {
            const name = findPackageName(index);
            const errors = findErrors(index + 1);
            output.push(` ☐ ${name}`);

            errors.forEach((error) => {
                const [count, fileName] = error
                    .trim()
                    .split(/\s+/)
                    .map((i) => i.trim());
                output.push('     ☐ ' + fileName + ' (' + count + ')');
            });
        }
    });

    fs.writeFileSync('../.todos/errors.todo', output.join('\n'));
};

const findErrors = (index) => {
    const regex = /^\s+\d+\s+/m;
    const output = [];

    while ((lines[index] ?? '').match(regex)) {
        output.push(lines[index]);
        index++;
    }

    return output;
};

const findPackageName = (index) => {
    let found = false;
    const regex = /^dist\/([^\.]+)/m;

    while (!found && index > 0) {
        index--;
        const line = lines[index];
        const isPackageName = line.match(regex);

        if (isPackageName) {
            found = true;
            return isPackageName[1];
        }
    }
};

run();
