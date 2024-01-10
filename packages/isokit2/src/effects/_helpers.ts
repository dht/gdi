import { allPipes } from '../iso.environment';
import { set } from 'lodash';

export const applyValues = (values: Json) => {
  if (!allPipes.main) {
    console.warn('No pipeline');
    return;
  }

  for (let path of Object.keys(values)) {
    set(allPipes, path, values[path]);
  }
};
