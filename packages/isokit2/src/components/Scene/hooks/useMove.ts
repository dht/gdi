import { RefObject, useEffect } from 'react';
import { arcCamera, ground, mainCamera, scene } from '../../../globals';
import { invokeEvent } from 'shared-base';

var draggedObject: any = null;
var startingPoint: any = null;
const ignoreItems = ['main-grid', 'center', 'env', 'skyboxMesh', 'stageMesh'];

export function useMoveMesh(canvasRef: RefObject<HTMLCanvasElement>, on?: boolean) {
  useEffect(() => {
    function getGroundPosition() {
      // Use a predicate to get position on the ground
      var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) {
        return mesh.id === 'main-grid';
      });

      if (pickInfo.hit) {
        return pickInfo.pickedPoint;
      }

      return null;
    }

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

        if (ignoreItems.includes(draggedObject.id) || !on) {
          startingPoint = null;
          draggedObject = null;
          return;
        }

        startingPoint = getGroundPosition();

        if (startingPoint) {
          // We need to disconnect camera from canvas
          setTimeout(function () {
            mainCamera.detachControl();
            arcCamera.detachControl();
          }, 0);
        }
      }
    }

    function onPointerUp() {
      if (startingPoint) {
        mainCamera.attachControl(canvasRef.current, true);
        arcCamera.attachControl(canvasRef.current, true);
        startingPoint = null;
        return;
      }
    }

    function onPointerMove(evt: any) {
      if (!startingPoint || !on) {
        return;
      }

      var current = getGroundPosition();

      if (!current) {
        return;
      }

      var diff = current.subtract(startingPoint);
      draggedObject.position.addInPlace(diff);

      startingPoint = current;
    }

    canvasRef.current!.addEventListener('pointerdown', onPointerDown, false);
    canvasRef.current!.addEventListener('pointerup', onPointerUp, false);
    canvasRef.current!.addEventListener('pointermove', onPointerMove, false);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('pointerdown', onPointerDown);
        canvasRef.current.removeEventListener('pointerup', onPointerUp);
        canvasRef.current.removeEventListener('pointermove', onPointerMove);
      }
    };
  }, [on]);
}
