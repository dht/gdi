const { faker } = require('@faker-js/faker');
const fs = require('fs');

const generatePerson = () => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
});

const people = [...new Array(300)].map(() => generatePerson());

fs.writeFileSync('../src/data/people.json', JSON.stringify(people, null, 4));
