const fs = require('fs');

const run = async () => {
    const items = [...new Array(100)].map((_i, index) => {
        const id = index + 1;

        const width = rnd(100, 600);
        const height = rnd(100, 600);

        return {
            id,
            imageUrl: `https://picsum.photos/seed/${id}/${width}/${height}`,
            ratio: width / height,
        };
    });

    fs.writeFileSync('./Masonry.items.json', JSON.stringify(items, null, 4));
};

const rnd = (min, max) => Math.floor(min + Math.random() * (max - min));

run();
