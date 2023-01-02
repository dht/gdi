import * as express from 'express';
import { CtrlRequirements } from '../controllers/ctrl.requirements';

export const requirements = express.Router();

const ctrlRequirements = new CtrlRequirements();

requirements.get('/', ctrlRequirements.get);

export default requirements;
