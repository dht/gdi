import { selectors as iso } from '@gdi/store-iso';
import * as assets from './selectors.assets';
import * as bar from './selectors.bar';
import * as base from './selectors.base';
import * as raw from './selectors.raw';
import * as single from './selectors.single';
import * as options from './selectors.options';

export const selectors = {
  raw,
  base,
  assets,
  bar,
  iso,
  single,
  options,
};
