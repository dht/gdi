import { prompt } from '@gdi/ui';
import AssetPickerContainer from '../../asset-picker/AssetPicker.container';
import EffectPickerContainer from '../../effect-picker/EffectPicker.container';

export function* getAudio() {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an asset',
    component: AssetPickerContainer,
    componentProps: {
      contentType: 'audio',
    },
    darkMode: true,
  });

  if (didCancel || !value) {
    return '';
  }

  const { assetUrl } = value;
  return assetUrl;
}

export function* getEffect() {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an effect',
    component: EffectPickerContainer,
    componentProps: {},
    darkMode: true,
  });

  if (didCancel || !value) {
    return '';
  }

  const { id } = value;
  return id;
}
