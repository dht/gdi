import * as express from 'express';
import { CtrlPing } from '../controllers/ctrl.ping';

export const ping = express.Router();

const ctrlPing = new CtrlPing();
ping.get('/', ctrlPing.ping);

export default ping;
