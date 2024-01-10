import { useEffect } from 'react';
import { ICameraPosition, IHudTimeline } from '../Hud.types';
import { useSetState } from 'react-use';

export function useCameraPosition(timeline: IHudTimeline = [], initialParams: ICameraPosition) {
  const [timers, patchTimers] = useSetState<Record<string, any>>({});
  const [camera, patchCamera] = useSetState<ICameraPosition>(initialParams);

  useEffect(() => {
    timeline.forEach((frame) => {
      const { id, millis, cameraPosition } = frame;

      if (cameraPosition) {
        const timer = setTimeout(() => {
          patchCamera(cameraPosition);
        }, millis);

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
