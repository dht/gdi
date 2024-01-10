import { get } from 'lodash';

export const parseElementInfo = (ev: any, elementLabels: Json, alternative?: boolean) => {
  if (!ev) {
    return {} as any;
  }

  const { id } = ev;

  const label = elementLabels[id] ?? '';

  if (!alternative) {
    return {
      id,
      label,
      x: get(ev, 'position[0]'),
      y: get(ev, 'position[1]'),
      z: get(ev, 'position[2]'),
    };
  } else {
    return {
      id,
      label,
      rx: get(ev, 'rotation[0]'),
      ry: get(ev, 'rotation[1]'),
      rz: get(ev, 'rotation[2]'),
    };
  }
};
