import { selectors as iso } from '@gdi/store-iso';
import * as assets from './selectors.assets';
import * as bar from './selectors.bar';
import * as base from './selectors.base';
import * as music from './selectors.music';
import * as mux from './selectors.mux';
import * as md from './selectors.md';
import * as options from './selectors.options';
import * as raw from './selectors.raw';
import * as single from './selectors.single';

export const selectors = {
  raw,
  base,
  assets,
  bar,
  iso,
  single,
  music,
  mux,
  md,
  options,
};
