import { get } from 'lodash';

export const parseCameraInfo = (ev: any, alternative?: boolean) => {
  if (!ev) {
    return {} as any;
  }

  const { cameraId, position, alpha, beta, radius } = ev;

  if (position) {
    if (!alternative) {
      return {
        id: cameraId,
        label: cameraId,
        x: get(ev, 'position[0]'),
        y: get(ev, 'position[1]'),
        z: get(ev, 'position[2]'),
      };
    } else {
      return {
        id: cameraId,
        label: cameraId,
        rx: get(ev, 'rotation[0]'),
        ry: get(ev, 'rotation[1]'),
        rz: get(ev, 'rotation[2]'),
      };
    }
  } else {
    return {
      id: cameraId,
      label: cameraId,
      alpha: alpha,
      beta: beta,
      radius: radius,
    };
  }
};
