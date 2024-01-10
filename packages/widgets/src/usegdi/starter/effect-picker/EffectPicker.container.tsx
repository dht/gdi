import { selectors, useSelector } from '@gdi/store-base';
import { IPostEffect, ISceneEffect } from '@gdi/store-iso';
import { useMemo } from 'react';
import { ItemPicker } from '@gdi/ui';
import { effects } from 'isokit2';
import EffectPreview from '../effect-viewer/EffectPreview';
import EffectPreviewContainer from '../effect-viewer/EffectViewer.container';

export type EffectPickerContainerProps = {
  contentType: string | string[];
  onCta: (effect: Json) => void;
  onCancel: () => void;
};

export function EffectPickerContainer(props: EffectPickerContainerProps) {
  const { contentType } = props;

  const items = useMemo(() => {
    return Object.values(effects).map((effect: any) => {
      return {
        size: effect.defaultDuration,
        ...effect,
      };
    });
  }, [effects, contentType]);

  return <ItemPicker sizeUnits='duration' items={items} {...props} />;
}

export default EffectPickerContainer;
