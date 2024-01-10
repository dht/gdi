const fs = require('fs');
const axios = require('axios');
const { config } = require('dotenv');
const { isEmpty } = require('lodash');

config();

const items = ['014c', '06f6', '0b54', '0c47', '14a0', '184b', '18d7', '1bcf', '20e9', '215e', '23ad', '2ae2', '3580', '3a75', '3a98', '3c3f', '40b2', '4120', '4298', '4545', '4641', '4820', '4830', '4a02', '4a31', '4cb2', '4d6c', '4d9c', '4db9', '4dfe', '4ead', '5520', '566e', '5777', '5862', '58a3', '6033', '6072', '6122', '689f', '6cdf', '6cef', '6d2c', '6d77', '6f68', '73d1', '7507', '75d8', '7603', '7ca6', '7d2c', '7ec3', '8027', '844b', '8cc1', '8d5e', '8efe', '9361', 'a11c', 'a136', 'a685', 'ae3d', 'afa5', 'b7e2', 'b84d', 'b8c6', 'bdd8', 'be33', 'cb97', 'cd04', 'd039', 'd67b', 'd7a1', 'e0b9', 'e5ee', 'ef95', 'f660', 'f8ec', 'f9af', 'fde3']; // prettier-ignore

const run = async () => {
  for (let item of items) {
    const result = await getTranscript(item);

    const fileName = `./output/transcript-${item}.json`;

    fs.writeFileSync(fileName, JSON.stringify(result, null, 2));

    if (isEmpty(result)) {
    }
  }
};

let instance;

const baseStorageUrl = `https://storage.googleapis.com/download/storage/v1/b/${process.env.VITE_PROJECT_ID}.appspot.com/o`;

instance = axios.create({
  baseURL: baseStorageUrl,
});

const getTranscript = (transcriptId) => {
  const filePath = `/%2Ftranscript-${transcriptId}%2Ftranscript.index.json?alt=media`;

  return instance
    .get(filePath)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return {};
    });
};

run();
