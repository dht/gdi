import * as express from 'express';
import { CtrlMe } from '../controllers/ctrl.me';

export const me = express.Router();

const ctrlMe = new CtrlMe();

me.get('/', ctrlMe.me);

export default me;
