const crypto = require('crypto');
const { config } = require('dotenv');

config();

const algorithm = 'aes-256-ctr';
const ENCRYPTION_KEY = process.env.IV.substring(0, 32);
// const ENCRYPTION_KEY = 'Put_Your_Password_Here';
const pepper = 'good';
const IV_LENGTH = 16;

const encodeString = (data) => {
  const dataWithPepper = data + pepper;
  let iv = crypto.randomBytes(IV_LENGTH);
  const vector = Buffer.concat([Buffer.from(ENCRYPTION_KEY), Buffer.alloc(32)], 32);
  let cipher = crypto.createCipheriv(algorithm, vector, iv);
  let encrypted = cipher.update(dataWithPepper);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

const decodeString = (encodedData) => {
  let textParts = encodedData.split(':');
  let iv = Buffer.from(textParts.shift(), 'hex');
  let encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const vector = Buffer.concat([Buffer.from(ENCRYPTION_KEY), Buffer.alloc(32)], 32);
  let decipher = crypto.createDecipheriv(algorithm, vector, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const decryptedDataWithoutPepper = decrypted.toString().replace(pepper, '');
  return decryptedDataWithoutPepper;
};

const run = async () => {
  const str = 'str';
  const encoded = encodeString(str);
  const decoded = decodeString(encoded);
};

run();
