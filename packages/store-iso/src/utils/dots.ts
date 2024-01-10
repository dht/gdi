import { Json } from 'redux-store-generator';
import { ISceneCurrentIds } from '../types.iso';

export const createDotId = (
  params: Partial<ISceneCurrentIds>,
  overrides: Partial<ISceneCurrentIds> = {}
) => {
  const merge = { ...params, ...overrides };
  const { cameraId, elementId, trackId, bitId, virtualDotId } = merge;
  const objectId = trackId === 'object' ? elementId : cameraId;

  if (!bitId || !virtualDotId || !objectId) {
    return '';
  }

  return [
    'dot', //
    bitId,
    objectId,
    virtualDotId,
  ].join('_');
};

export const dotExists = (
  params: Partial<ISceneCurrentIds>,
  overrides: Partial<ISceneCurrentIds> = {},
  dotIds: string[] = []
) => {
  const dotId = createDotId(params, overrides);
  return dotIds.includes(dotId);
};

export const validateDotId = (dotId: string, params: Json) => {
  const output = {
    ok: true,
    error: '',
  };

  const { bitId, elementId, virtualDotId } = params;
  const [prefix, bitId2, elementId2, virtualDotId2] = dotId.split('_');

  if (prefix !== 'dot') {
    output.ok = false;
    output.error = 'prefix mismatch';
  }

  if (bitId in params && bitId !== bitId2) {
    output.ok = false;
    output.error = `bitId mismatch (${bitId} !== ${bitId2})`;
  }

  if (elementId in params && elementId !== elementId2) {
    output.ok = false;
    output.error = `elementId mismatch (${elementId} !== ${elementId2})`;
  }

  if (virtualDotId in params && virtualDotId !== virtualDotId2) {
    output.ok = false;
    output.error = `virtualDotId mismatch (${virtualDotId} !== ${virtualDotId2})`;
  }

  return output;
};
