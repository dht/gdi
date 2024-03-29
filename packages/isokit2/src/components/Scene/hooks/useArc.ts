import { useEffect } from 'react';
import { addListener } from 'shared-base';
import { moveArc } from '../../../iso.camera';

export function useArc() {
  useEffect(() => {
    const unlisten = addListener('arc/camera', (ev: any) => {
      const { animated, ...rest } = ev;
      moveArc(rest, animated);
    });

    return () => {
      unlisten();
    };
  }, []);
}
