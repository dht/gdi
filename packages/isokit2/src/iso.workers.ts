export const initWorker = (self: any) => {
  var viewProj: any;
  let lastProj: any[] = [];
  var depthMix = new BigInt64Array();
  var vertexCount = 0;
  var positions: any;
  let sortRunning: boolean;
  let indexMix = new Uint32Array(depthMix.buffer);

  const runSort = (viewProj: any) => {
    vertexCount = positions.length;
    if (depthMix.length !== vertexCount) {
      depthMix = new BigInt64Array(vertexCount);
      const indices = new Uint32Array(depthMix.buffer);
      for (let j = 0; j < vertexCount; j++) {
        indices[2 * j] = j;
      }
    }
    let dot = lastProj[2] * viewProj[2] + lastProj[6] * viewProj[6] + lastProj[10] * viewProj[10];
    if (Math.abs(dot - 1) < 0.01) {
      return;
    }

    const floatMix = new Float32Array(depthMix.buffer);
    for (let j = 0; j < vertexCount; j++) {
      let i = indexMix[2 * j];
      floatMix[2 * j + 1] =
        10000 +
        viewProj[2] * positions[3 * i + 0] +
        viewProj[6] * positions[3 * i + 1] +
        viewProj[10] * positions[3 * i + 2];
    }
    lastProj = viewProj;

    depthMix.sort();

    self.postMessage({ depthMix }, [depthMix.buffer]);
  };

  const throttledSort = () => {
    if (!sortRunning) {
      sortRunning = true;
      let lastView = viewProj;
      runSort(lastView);
      setTimeout(() => {
        sortRunning = false;
        if (lastView !== viewProj) {
          throttledSort();
        }
      }, 0);
    }
  };

  self.onmessage = (e: any) => {
    viewProj = e.data.view;
    positions = e.data.positions;
    throttledSort();
  };
};
