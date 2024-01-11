import { useEffect } from 'react';
import { addExternal } from '../../../iso.externals.add';
import { removeAllMeshes } from '../../../iso.meshes.utils';
import { moveArc } from '../../../iso.camera';

export function useAdhoc(adhocUrl?: string) {
  useEffect(() => {
    if (!adhocUrl) return;

    removeAllMeshes();

    addExternal({
      id: 'adhoc',
      url: adhocUrl,
    });

    moveArc(
      {
        alpha: 0,
        beta: 0,
        radius: 20,
        target: [0, 3, 0],
      },
      true
    );
  }, [adhocUrl]);
}
