import * as raw from './selectors.raw';
import { IBusinessStore } from './types';

export const $i = (state: { business: IBusinessStore }) => state.business;
