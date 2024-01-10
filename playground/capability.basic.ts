import { config } from 'dotenv';
import db from '../db';
import * as admin from 'firebase-admin';
import { setFirestore } from '../utils/firebase';

config();

var serviceAccount = require('./serviceAccountKey.json');
const storageBucket = process.env.STORAGE_BUCKET;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket,
});

const firestore = admin.firestore();
setFirestore(firestore);

const run = async () => {
  const req = {
    user: {
      uid: '123,',
    },
  };

  const keys = {
    a: 1,
  };

  const response = await db.keys.patch(req, keys);
};

run();
