import { ISceneDynamic } from '@gdi/store-iso';
import { allDynamics } from './data/dynamics';

export const addDynamic = (item: ISceneDynamic) => {
  const { flavour } = item;

  const addMethod = (allDynamics as any)[flavour];

  if (!addMethod) {
    console.error('Dynamic not found:', flavour);
    return;
  }

  addMethod(item);
};
