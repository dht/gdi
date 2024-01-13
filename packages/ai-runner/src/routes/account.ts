import * as express from 'express';
import db from '../db';
import { cleanUndefined } from '../utils/object';
import { Json, User } from '../types';
import { midKeys } from '../middlewares/midKeys';
import { dbAdapter } from '../utils/globals';

export const router = express.Router();

router.post('/keys', async (req, res) => {
  try {
    const { openAI, elevenLabs } = req.body;

    const keys = cleanUndefined({
      openAI,
      elevenLabs,
    });

    await dbAdapter.patchKeys(req, keys);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving keys:', error);
    res.status(500).send('Error saving keys');
  }
});

router.post('/login', async (req: any, res) => {
  try {
    const { email, uid, displayName, photoURL } = req['user'] as User;

    const user = cleanUndefined({
      uid,
      email,
      displayName,
      photoURL,
    });

    await db.user.patch(req, user);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('Error saving user');
  }
});

router.use('/keys/validate', midKeys);

const API_KEY_OPEN_AI_LENGTH = 51;
const API_KEY_ELEVEN_LABS_LENGTH = 32;

router.post('/keys/validate', async (req: any, res) => {
  try {
    const keys = req.keys;

    const { openAI = '', elevenLabs } = keys ?? {};

    const isOpenAiOk = openAI.length >= API_KEY_OPEN_AI_LENGTH;
    const isElevenLabsOk = !elevenLabs || elevenLabs.length >= API_KEY_ELEVEN_LABS_LENGTH;

    const isApiKeyOk = isOpenAiOk && isElevenLabsOk;

    res.status(200).json({ isApiKeyOk });
  } catch (error) {
    console.error('Error saving keys:', error);
    res.status(500).send('Error saving keys');
  }
});

router.post('/settings', async (req, res) => {
  try {
    const { settings } = req.body;

    await db.settings.patch(req, settings);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving settings:', error);
    res.status(500).send('Error settings keys');
  }
});

router.get('/settings', async (req, res) => {
  try {
    const settings = await db.settings.get(req);
    res.status(200).json({ settings });
  } catch (error) {
    console.error('Error saving settings:', error);
    res.status(500).send('Error settings keys');
  }
});

export const onNewUser = async (snapshot: any, context: any) => {
  const data = snapshot.data();
  const { uid } = data;

  const req = { user: { uid } };

  await db.tags.create(req, 'project-new');
};
