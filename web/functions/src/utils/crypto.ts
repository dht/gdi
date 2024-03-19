import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import * as functions from 'firebase-functions';

const algorithm = 'aes-256-ctr';
const pepper = functions.config().myapi?.pepper;
const ENCRYPTION_KEY = functions.config().myapi?.iv;
const IV_LENGTH = 16;

// Function to encode (hash) data with bcrypt
export const hashData = async (data: string) => {
  try {
    const saltRounds = 10; // Salt rounds for bcrypt hashing

    // Hash data
    const hashedData = await bcrypt.hash(data, saltRounds);
    return hashedData;
  } catch (error: any) {
    throw new Error('Error encoding data');
  }
};

// Function to compare (verify) encoded data with bcrypt
export const compareData = async (plainData: string, hashedData: string) => {
  try {
    // Compare hashed data with plain data
    const match = await bcrypt.compare(plainData, hashedData);
    return match;
  } catch (error: any) {
    throw new Error('Error comparing data');
  }
};

export const encodeString = (data: string) => {
  const dataWithPepper = data + pepper;
  let iv = crypto.randomBytes(IV_LENGTH);
  const vector = Buffer.concat([Buffer.from(ENCRYPTION_KEY), Buffer.alloc(32)], 32);
  let cipher = crypto.createCipheriv(algorithm, vector, iv);
  let encrypted = cipher.update(dataWithPepper);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decodeString = (encodedData: string) => {
  let textParts = encodedData.split(':');
  let iv = Buffer.from(textParts.shift() as string, 'hex');
  let encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const vector = Buffer.concat([Buffer.from(ENCRYPTION_KEY), Buffer.alloc(32)], 32);
  let decipher = crypto.createDecipheriv(algorithm, vector, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const decryptedDataWithoutPepper = decrypted.toString().replace(pepper, '');
  return decryptedDataWithoutPepper;
};

export const encodeJson = (data: any) => {
  return Object.keys(data ?? {}).reduce((acc, key) => {
    acc[key] = encodeString(data[key]);
    return acc;
  }, {} as any);
};

export const decodeJson = (data: any) => {
  return Object.keys(data ?? {}).reduce((acc, key) => {
    acc[key] = decodeString(data[key]);
    return acc;
  }, {} as any);
};
