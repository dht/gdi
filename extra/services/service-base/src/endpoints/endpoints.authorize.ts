import * as express from 'express';
import { CtrlAuthorize } from '../controllers/ctrl.authorize';

export const authorize = express.Router();

const ctrlAuthorize = new CtrlAuthorize();

authorize.get('/', ctrlAuthorize.authorize);

export default authorize;
