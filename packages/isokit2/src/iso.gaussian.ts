/*
Using .splat file conversion and code from https://github.com/dylanebert/gsplat.js
Halo diorama captured by https://github.com/PirateJC
*/

import { Tools } from '@babylonjs/core';
import { scene } from './globals';
import { ISplatData, parseSplatData, refreshMatrix } from './iso.gaussian.utils';
import { initQuad } from './iso.meshes.quad';
import { initWorker } from './iso.workers';

export const initSplat = (url: string) => {
  let splatData: ISplatData;

  Tools.LoadFileAsync(url, true).then((data) => {
    const camera = scene.activeCamera!;

    splatData = parseSplatData(new Uint8Array(data));
    const { vertexCount, positions } = splatData;

    let firstTime = true;
    let matricesData = new Float32Array(vertexCount * 16);
    const quad = initQuad();

    const updateInstances = function (idxMix: any) {
      refreshMatrix(matricesData, idxMix, splatData);

      if (firstTime) {
        quad.thinInstanceSetBuffer('matrix', matricesData, 16, false);
      } else {
        quad.thinInstanceBufferUpdated('matrix');
      }
      firstTime = false;
    };

    console.log('ready');

    const worker = new Worker(
      URL.createObjectURL(
        new Blob(['(', initWorker.toString(), ')(self)'], {
          type: 'application/javascript',
        })
      )
    );

    worker.onmessage = (e) => {
      let indexMix = new Uint32Array(e.data.depthMix.buffer);
      updateInstances(indexMix);
    };
    scene.onBeforeRenderObservable.add(() => {
      worker.postMessage({ view: camera.getViewMatrix().m, positions: positions });
    });
  });
};
