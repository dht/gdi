import { useEffect, useState } from 'react';
import { addListener } from 'shared-base';

export function useGlbReady() {
  const [isGlbReady, setIsGlbReady] = useState(false);

  useEffect(() => {
    const unlisten = addListener('scene/glb/ready', () => {
      setIsGlbReady(true);
    });

    return () => {
      unlisten();
    };
  }, []);

  return isGlbReady;
}
