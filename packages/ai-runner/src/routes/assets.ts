import * as express from 'express';
import { guid8 } from 'shared-base';
import { deleteFromBucket } from '../api/files';
import { chat } from '../api/openai';
import { upload } from '../controllers/upload';
import { uploadZip } from '../controllers/zip';
import db from '../db';
import { midKeys } from '../middlewares/midKeys';
import { contentTypeFromFileName } from '../utils/contentType';
import { tsShort } from '../utils/time';

export const router = express.Router();

router.use(midKeys);

router.post('/new', async (req: any, res) => {
  try {
    const { assetUrl, fileName, filePath = '', tags = [], project = '' } = req.body;
    const contentType = contentTypeFromFileName(fileName);

    const asset = await db.assets.create(req, {
      id: guid8(),
      fileName,
      filePath,
      assetUrl,
      contentType,
      tsAdded: tsShort(),
      tags,
      project,
    });

    res.status(200).json({ success: true, asset });
  } catch (error: any) {
    console.error('Error creating asset:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/upload', async (req: any, res) => {
  try {
    const { fileInfo, tags = [], project = '' } = req.body;
    const { name = '' } = fileInfo ?? {};

    if (name.endsWith('.zip')) {
      res.status(200).json({ success: true, asset: null });
      return;
    }

    const asset = await upload(req, fileInfo, tags, project);

    res.status(200).json({ success: true, asset });
  } catch (error: any) {
    console.error('Error getting playback:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/myAssets', async (req: any, res) => {
  try {
    const assets = await db.assets.getAll(req);
    res.status(200).json({ success: true, assets });
  } catch (error: any) {
    console.error('Error getting assets:', error);
    res.status(500).json({ error: error.message });
  }
});

router.patch('/myAssets/:id', async (req: any, res) => {
  const { id } = req.params;
  const { fileName, tags } = req.body;

  try {
    const asset = await db.assets.get(req, id);
    asset.fileName = fileName ?? asset.fileName;
    asset.tags = tags ?? asset.tags;
    await db.assets.set(req, id, asset);
    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error getting assets:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/delete', async (req: any, res) => {
  const { assetId } = req.body;

  try {
    const asset = await db.assets.get(req, assetId);

    if (asset) {
      const { filePath } = asset;
      await db.assets.delete(req, assetId);
      await deleteFromBucket(filePath);
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error getting assets:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/fileName', async (req: any, res) => {
  const { instructions, prompt } = req.body;

  try {
    const text = `generate a file name for ${instructions}. Return only the file name.`.replace(
      '{prompt}',
      prompt
    );

    const response = await chat.chat(text);

    res.status(200).json({ success: true, fileName: response.text });
  } catch (error: any) {
    console.error('Error getting assets:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/upload/zip', async (req: any, res) => {
  try {
    const { fileInfo, tags = [], project } = req.body;
    const { name = '' } = fileInfo ?? {};

    if (!name.endsWith('.zip')) {
      res.status(200).json({ success: true, asset: null });
      return;
    }

    const assets = await uploadZip(req, fileInfo, tags, project);

    res.status(200).json({ success: true, assets });
  } catch (error: any) {
    console.error('Error getting playback:', error);
    res.status(500).json({ error: error.message });
  }
});
