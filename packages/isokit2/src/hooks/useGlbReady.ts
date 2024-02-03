import { useEffect, useState } from 'react';
import { addListener } from 'shared-base';

export function useGlbReady(maxTime: number = 6000) {
  const [isGlbReady, setIsGlbReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsGlbReady(true);
    }, maxTime);

    const sceneGlbReadyListener = () => {
      setIsGlbReady(true);
      clearTimeout(timeout);
    };

    const unlisten = addListener('scene/glb/ready', sceneGlbReadyListener);

    return () => {
      unlisten();
      clearTimeout(timeout);
    };
  }, []);

  return isGlbReady;
}
