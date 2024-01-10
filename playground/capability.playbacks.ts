import { config } from 'dotenv';
import * as admin from 'firebase-admin';
import db from '../db';
import * as fs from 'fs';
import { setFirestore } from '../utils/firebase';

//  FIRESTORE_EMULATOR_HOST="localhost:8080" ts-node src/_playground/capability.setups.ts

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
  console.time('setups');

  const req = { user: { uid: 'test' } };

  const playback = await db.playbacks.get(req, '57ec');

  fs.writeFileSync('./playback.json', JSON.stringify(playback, null, 2));

  console.timeEnd('setups');
};

run();
