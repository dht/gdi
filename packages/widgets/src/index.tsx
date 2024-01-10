import type { IWidgets } from 'igrid';
import { starter } from './usegdi/starter/index';
export { sagas } from './sagas';
export { AssetPickerContainer } from './usegdi/starter/asset-picker/AssetPicker.container';

export const allWidgets: IWidgets = {
  ...starter,
};
