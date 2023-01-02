import * as express from 'express';
import { CtrlRankings } from '../controllers/ctrl.rankings';

export const rankings = express.Router();

const ctrlRankings = new CtrlRankings();

rankings.get('/', ctrlRankings.get);

export default rankings;
