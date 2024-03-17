const fs = require('fs-extra');
const csv = require('csv'); // Importing the synchronous parsing function
const _ = require('lodash'); // Importing the synchronous parsing function

const mapFields = {
  Name: 'name',
  'Given Name': 'firstName',
  'Family Name': 'lastName',
  Photo: 'imageUrl',
  'E-mail 1 - Value': 'email',
  'Phone 1 - Value': 'phone',
  'Website 1 - Value': 'linkedin',
};

const run = async () => {
  const results = [];
  fs.createReadStream('calendars.csv')
    .pipe(csv.parse({ columns: true, skip_empty_lines: true, trim: true }))
    .on('data', (data) => {
      let item = Object.keys(data).reduce((acc, key) => {
        const newKey = mapFields[key];
        if (newKey) {
          acc[newKey] = data[key];
        }
        return acc;
      }, {});
      results.push(item);
    })
    .on('end', () => {
      fs.writeJsonSync('calendars.json', results, { spaces: 2 });
    });
};

run();
