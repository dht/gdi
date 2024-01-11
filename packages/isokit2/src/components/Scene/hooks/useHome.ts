import { useEffect, useState } from 'react';
import { addListener } from 'shared-base';
import { moveArc } from '../../../iso.camera';
import { useKey } from 'react-use';
import { resetMeshVector } from '../../../iso.meshes.utils';

export function useHome() {
  const [lastTs, setLastTs] = useState(0);

  useKey(
    'h',
    () => {
      const ts = Date.now();
      const delta = ts - lastTs;

      if (delta < 1000) {
        resetMeshVector();
      }

      setLastTs(ts);
    },
    {},
    [lastTs]
  );
}
