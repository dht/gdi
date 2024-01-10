import { IBit, IDot, actions, createDotId, validateDotId, selectors } from '@gdi/store-iso';
import { toast } from '@gdi/ui';
import { call, put, select } from 'saga-ts';

export function* createCameraDot(params: Json) {
  const { bitId, dotId, virtualDotId, cameraId, values } = params;

  const dot = {
    id: dotId,
    bitId,
    virtualDotId,
    cameraId,
    values,
  };

  yield put(actions.sceneDots.add(dot));

  return dot;
}

export function* updateCameraDot(params: Json) {
  const { bitId, dotId, virtualDotId, data } = params;
  const { cameraId, ...rest } = data;

  const res = validateDotId(dotId, { bitId, elementId: cameraId });

  if (!res.ok) {
    toast.show(res.error, 'error');
    return;
  }

  let dot = yield* select(selectors.base.$dot);

  if (!dot) {
    yield* call(createCameraDot, {
      bitId,
      dotId,
      virtualDotId,
      cameraId,
      values: rest,
    });
    return;
  }

  yield put(
    actions.sceneDots.patch(dotId, {
      values: rest,
    })
  );
}

export function* createMeshDot(params: Json) {
  const { bitId, dotId, virtualDotId, meshId, values } = params;

  const dot = {
    id: dotId,
    bitId,
    virtualDotId,
    meshId,
    values,
  };

  yield put(actions.sceneDots.add(dot));

  return dot;
}

export function* updateMeshDot(params: Json) {
  const { bitId, dotId, virtualDotId, data } = params;
  const { id, ...rest } = data;

  const res = validateDotId(dotId, { bitId, elementId: id });

  if (!res.ok) {
    toast.show(res.error, 'error');
    return;
  }

  let dot = yield* select(selectors.base.$dot);

  if (!dot) {
    yield* call(createMeshDot, {
      bitId,
      dotId,
      virtualDotId,
      meshId: id,
      values: rest,
    });
    return;
  }

  yield put(
    actions.sceneDots.patch(dotId, {
      values: rest,
    })
  );
}

export function* addSkyBoxDot(bit: IBit) {
  const id = createDotId({
    bitId: bit.id,
    virtualDotId: 'start',
    cameraId: 'free',
    trackId: 'camera',
  });

  const dot: IDot = {
    id,
    bitId: bit.id,
    virtualDotId: 'start',
    cameraId: 'free',
    values: {
      position: [0, 0, 0],
      rotation: [0, 90, 0],
    },
  };

  yield put(actions.sceneDots.patch(dot.id, dot));
}
