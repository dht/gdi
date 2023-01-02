import * as express from 'express';
import { CtrlBmsFeatures } from '../controllers/ctrl.bmsFeatures';

export const bmsFeatures = express.Router();

const ctrlBmsFeatures = new CtrlBmsFeatures();

bmsFeatures.get('/', ctrlBmsFeatures.get);

export default bmsFeatures;
