import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import React, { useMemo } from 'react';
import { BitLayer } from './BitLayer';

export type BitLayerContainerProps = {
  absolute?: boolean;
};

export function BitLayerContainer(props: BitLayerContainerProps) {
  const { absolute } = props;
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const state = useSelector(selectors.raw.$rawSceneState);

  const { layerId } = currentIds;
  const { currentAttachmentUrl } = state;

  if (!layerId) {
    return null;
  }

  return <BitLayer layerId={layerId} attachmentUrl={currentAttachmentUrl} absolute={absolute} />;
}

export default BitLayerContainer;
