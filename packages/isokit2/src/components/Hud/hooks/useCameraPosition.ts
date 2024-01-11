import { useEffect } from 'react';
import { useSetState } from 'react-use';
import { invokeEvent } from 'shared-base';
import { ICameraPosition, IHudItem } from '../Hud.types';

export function useCameraPosition(items: IHudItem[] = [], initialPosition: ICameraPosition) {
  const [timers, patchTimers] = useSetState<Record<string, any>>({});
  const [camera, patchCamera] = useSetState<ICameraPosition>(initialPosition);

  useEffect(() => {
    invokeEvent('arc/camera', initialPosition);

    items.forEach((frame) => {
      const { id, tsStart, cameraValues } = frame;

      if (cameraValues) {
        const timer = setTimeout(() => {
          patchCamera(cameraValues);
          invokeEvent('arc/camera', cameraValues);
        }, tsStart);

        patchTimers({ [id]: timer });
      }
    });

    return () => {
      Object.values(timers).forEach((timer: any) => {
        clearTimeout(timer);
      });
    };
  }, []);

  return camera as Record<string, ICameraPosition>;
}
