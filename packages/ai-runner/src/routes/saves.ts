import * as express from 'express';
import db from '../db';
import { saveToBucket } from '../api/files';
import { guid4 } from 'shared-base';

export const router = express.Router();

router.post('/scene', async (req: any, res) => {
  try {
    const { projectId } = req.body;
    const asset = await db.scene.saveOrCreateAsset(req, projectId);
    res.status(200).json({ asset });
  } catch (error) {
    console.error('Error uploading scene:', error);
    res.status(500).send('Error uploading scene');
  }
});

router.post('/clip', async (req: any, res) => {
  try {
    const { projectId } = req.body;
    const asset = await db.clip.saveOrCreateAsset(req, projectId);
    res.status(200).json({ asset });
  } catch (error) {
    console.error('Error uploading clip:', error);
    res.status(500).send('Error uploading clip');
  }
});

router.post('/scene/restore', async (req, res) => {
  try {
    const { projectId } = req.body;
    const response = await db.scene.restore(req, projectId);
    res.status(200).json({ success: response.success });
  } catch (error) {
    console.error('Error restoring scene:', error);
    res.status(500).send('Error restoring scene');
  }
});

router.post('/clip/restore', async (req, res) => {
  try {
    const { projectId } = req.body;
    const response = await db.clip.restore(req, projectId);
    res.status(200).json({ success: response.success });
  } catch (error) {
    console.error('Error restoring clip:', error);
    res.status(500).send('Error restoring clip');
  }
});
