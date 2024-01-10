import { RefObject, useEffect } from 'react';
import { invokeEvent } from 'shared-base';
import { scene } from '../../../globals';
import { getMeshInfo } from '../../../iso.utils';

var draggedObject: any = null;
const ignoreItems = ['main-grid', 'center', 'env'];

export function usePick(canvasRef: RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    function findRootMesh(mesh: any): any {
      if (mesh.parent) {
        return findRootMesh(mesh.parent);
      }

      return mesh;
    }

    function onPointerDown(evt: any) {
      if (evt.button !== 0) {
        return;
      }

      // Check if we are under a mesh
      var pickInfo = scene.pick(scene.pointerX, scene.pointerY);
      if (pickInfo.hit) {
        draggedObject = findRootMesh(pickInfo.pickedMesh);

        if (ignoreItems.includes(draggedObject.id)) {
          return;
        }

        if (!draggedObject) {
          return;
        }

        invokeEvent('mesh/select', { elementId: draggedObject.id });
        invokeEvent('element/move', getMeshInfo(draggedObject));
      }
    }

    canvasRef.current!.addEventListener('pointerdown', onPointerDown, false);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('pointerdown', onPointerDown);
      }
    };
  }, []);
}
