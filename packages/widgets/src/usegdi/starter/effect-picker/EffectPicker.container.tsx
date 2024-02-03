import { ItemPicker } from '@gdi/ui';
import { effects } from 'isokit2';
import { useMemo } from 'react';

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
