import * as admin from 'firebase-admin';
import { saveToBucket, setBucket } from '../api/files';
import { config } from 'dotenv';

config();

var serviceAccount = require('./serviceAccountKey.json');

const storageBucket = process.env.STORAGE_BUCKET;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket,
});

const bucket = admin.storage().bucket();

const run = async () => {
  const req = {
    user: {
      uid: 'test',
    },
  };

  const meta = {
    source: 'capability',
  };

  setBucket(bucket);
  const url = await saveToBucket(req, 'speech/test.mp3', 'test', 'audio/mp3', meta);
};

run();
