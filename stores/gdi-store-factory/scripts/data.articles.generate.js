const fs = require('fs');
const { faker } = require('@faker-js/faker');

const tags = ['nature', 'geek', 'background', 'team', 'friend', 'people'];

const run = async () => {
    const items = {};

    [...new Array(300)].map((_i, index) => {
        const id = String(index + 1);

        const width = rnd(800, 1600);
        const height = rnd(500, 1200);

        const ratio = width / height;

        const widthThumb = 200;
        const heightThumb = Math.floor(200 / ratio);

        items[id] = {
            id,
            title: faker.lorem.sentence(),
            imageUrl: `https://picsum.photos/seed/${id}/${width}/${height}`,
            imageThumbUrl: `https://picsum.photos/seed/${id}/${widthThumb}/${heightThumb}`,
            ratio: width / height,
            imageDescription: faker.lorem.paragraph(),
            imageSource: faker.company.name(),
            title: faker.lorem.sentence(),
            authorName: faker.name.fullName(),
            publishDate: faker.date.recent(),
            lastPublishDate: faker.date.recent(),
            lastSaveDate: faker.date.recent(),
            categoryBreadcrumbs: [
                faker.commerce.department(),
                faker.commerce.department(),
                faker.commerce.department(),
            ].join('>'),
            comments: faker.datatype.number(10),
            content: faker.lorem.paragraphs(2),
            intro: faker.lorem.paragraphs(1),
            isPublished: faker.datatype.boolean(),
            linkPath: faker.lorem.sentence().replace(' ', '-'),
            slogan: faker.lorem.sentence(),
            status: faker.helpers.arrayElement([
                'draft',
                'published',
                'archived',
            ]),
            tags: faker.helpers.arrayElements(tags),
            minutesSpentEditing: faker.datatype.number(10),
            wordCount: faker.datatype.number(1000),
        };
    });

    fs.writeFileSync(
        './data.articles.ts',
        'export const articles = ' + JSON.stringify(items, null, 4)
    );
};

const rnd = (min, max) => Math.floor(min + Math.random() * (max - min));

run();
