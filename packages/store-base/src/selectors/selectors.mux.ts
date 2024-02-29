import { set } from 'lodash';
import { createSelector } from 'reselect';
import { tools } from '../data/data.tools';
import * as raw from './selectors.raw';

export const $tools = createSelector(raw.$rawCapabilities, (capabilities) => {
  const ids = Object.keys(capabilities);

  set(tools, '[0].function.parameters.properties.taskType.enum', ids);

  return tools;
});
