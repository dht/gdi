import * as express from 'express';
import { CtrlBusinessDomains } from '../controllers/ctrl.businessDomains';

export const businessDomains = express.Router();

const ctrlBusinessDomains = new CtrlBusinessDomains();

businessDomains.get('/', ctrlBusinessDomains.get);

export default businessDomains;
