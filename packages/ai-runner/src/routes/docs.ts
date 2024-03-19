import * as express from 'express';
import { deleteFromBucket, getFile, renameFile, saveToBucket } from '../api/files';
import { midKeys } from '../middlewares/midKeys';
import db from '../db';

export const router = express.Router();

router.use(midKeys);

router.post('/:id/get', async (req: any, res) => {
  try {
    const { id } = req.params;
    const { filePath, project } = req.body;

    let content: string | Buffer = '';

    if (filePath) {
      const buffer = await getFile(filePath);
      content = buffer.toString();
    }

    const docMeta = await db.docs.get(req, id);

    res.status(200).json({ success: true, content, meta: docMeta ?? {} });
  } catch (error: any) {
    console.error('Error getting doc:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/update', async (req: any, res) => {
  try {
    const { id } = req.params;
    const { fileName, project, content } = req.body;

    const filePath = `${project}/${fileName}`;

    const url = await saveToBucket(req, filePath, content, 'text/plain');

    await db.docs.patch(req, id, { filePath, fileName });

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error updating doc:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/rename', async (req: any, res) => {
  try {
    const { id } = req.params;
    const { newFilePath } = req.body;

    const docMeta = await db.docs.get(req, id);

    const { filePath } = docMeta;

    await renameFile(filePath, newFilePath);

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error renaming doc:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/delete', async (req: any, res) => {
  try {
    const { id } = req.params;
    const docMeta = await db.docs.get(req, id);

    const { filePath } = docMeta;

    await deleteFromBucket(filePath);

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error deleting doc:', error);
    res.status(500).json({ error: error.message });
  }
});
