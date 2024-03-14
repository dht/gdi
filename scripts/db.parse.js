const fs = require('fs-extra');
const { upperFirst } = require('lodash');

const run = async () => {
  fs.readdirSync('contacts').forEach((file) => {
    const content = fs.readJsonSync(`contacts/${file}`, 'utf8');

    let { firstName, lastName } = content;

    firstName = upperFirst(firstName);
    lastName = upperFirst(lastName);

    content.firstName = firstName;
    content.lastName = lastName;
    content.name = `${firstName} ${lastName}`;

    fs.writeJsonSync(`contacts/${file}`, content, { spaces: 2 });
  });
};

run();
