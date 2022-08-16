import { actions } from './actions';
import { clearState, initialState, reducers } from './initialState';
import { endpointsConfigOverrides } from './api';
import { selectors } from './selectors.index';

export const mixer = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};

export type {
    IMixerStore,
    IMixerState,
    IViewMode,
    ITypography,
    ILocaleOption,
    IGalleryViewMode,
    IGalleryState,
    IImageWithWidget,
    IWidgetsFilter as IWidgetsFilter,
} from './types';

export { getSchemaPropertiesByType } from './utils/widgets';
