const axios = require('axios');
const fs = require('fs-extra');
const sharp = require('sharp');
const { guid4 } = require('shared-base');
const json = require('./downloadImages.json');

const downloadImage = async (url, filename) => {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  // Pipe the stream data to a file
  if (fs.existsSync(`raw/${filename}`)) {
    fs.unlinkSync(`raw/${filename}`);
  }

  const writer = fs.createWriteStream(`raw/${filename}`);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

const downloadAll = async () => {
  console.time('downloadAll');
  const data = fs.readJsonSync('./data.json');

  const promises = data.map((item) => {
    const { id, imageUrl } = item;
    return downloadImage(imageUrl, `${id}.jpg`); // Assuming the images are in jpg format
  });

  await Promise.all(promises);
  console.timeEnd('downloadAll');
};

const downloadSingle = async (url, id) => {
  console.time('downloadSingle');

  await downloadImage(url, `${id}.jpg`); // Assuming the images are in jpg format

  console.timeEnd('downloadSingle');
};

const IMAGE_SIZE = 1840;
const cropImage = async (inputPath, outputPath, imageIndex) => {
  const left = imageIndex % 2 === 1 ? 0 : IMAGE_SIZE / 2;
  const top = imageIndex <= 2 ? 0 : IMAGE_SIZE / 2;

  try {
    await sharp(inputPath)
      // Crop the image to a specific region (e.g., x=20, y=20, width=100, height=100)
      .extract({
        left,
        top,
        width: IMAGE_SIZE / 2,
        height: IMAGE_SIZE / 2,
      })
      // Resize the image to a specific width and height
      .resize(300, 300)
      // Reduce the quality to 80 (for JPEGs)
      .jpeg({ quality: 80, progressive: true })
      /// progressive (for JPEGs and PNGs)
      .toFile(outputPath);
  } catch (error: any) {
    console.error('Error processing the image:', error);
  }
};

const cropImages = async () => {
  console.time('cropImages');
  const data = fs.readJsonSync('./data.json');

  for (let item of data) {
    const { id, imageIndex } = item;

    const inputPath = `raw/${id}.jpg`;
    const outputPath = `processed/${id}.jpg`;

    await cropImage(inputPath, outputPath, imageIndex);
  }

  console.timeEnd('cropImages');
};

const cropSingleImage = async (id) => {
  console.time('cropSingleImage');

  const inputPath = `raw/${id}.jpg`;
  const outputPath = `processed/${id}.jpg`;

  await sharp(inputPath)
    // Crop the image to a specific region (e.g., x=20, y=20, width=100, height=100)
    // Resize the image to a specific width and height
    .resize(300, 300)
    // Reduce the quality to 80 (for JPEGs)
    // Reduce the quality to 80 (for JPEGs)
    .jpeg({ quality: 80, progressive: true })
    /// progressive (for JPEGs and PNGs)
    .toFile(outputPath);

  console.timeEnd('cropSingleImage');
};

const appScreenshot = async () => {
  // await downloadAll();
  // await cropImages();
  //   await cropSingleImage();

  const imageUrl =
    'https://media.discordapp.net/attachments/1004209161191555123/1184580002210119710/dht__create_a_outside_park_f2df6576-c27c-406e-a676-05a0ba44576f.png?ex=658c7d18&is=657a0818&hm=3ce6144f206487cf78164109b37eed6161aede47deda09df79a5171617ffdd80&=&format=webp&quality=lossless&width=920&height=920';

  const imageName = 'z_assistants';
  await downloadSingle(imageUrl, imageName);
  await cropSingleImage(imageName);
  const outputPath = `processed/${imageName}.jpg`;

  fs.copySync(outputPath, `../web/public/images/${imageName}.jpg`);
};
const run = async () => {
  for (let file of Object.keys(json)) {
    const fileName = `z_${file}.jpg`;

    if (json[file].startsWith('https')) {
      const inputUrl = json[file];
      await downloadImage(inputUrl, fileName); // Assuming the images are in jpg format
    }

    const outputPath = `processed/${fileName}`;

    sharp('./raw/' + fileName)
      // Crop the image to a specific region (e.g., x=20, y=20, width=100, height=100)
      // Resize the image to a specific width and height
      .resize(300, 300)
      // background color white
      // Reduce the quality to 80 (for JPEGs)
      // Reduce the quality to 80 (for JPEGs)
      .jpeg({ quality: 80, progressive: true })
      /// progressive (for JPEGs and PNGs)
      .toFile(outputPath);
  }
};

run();
