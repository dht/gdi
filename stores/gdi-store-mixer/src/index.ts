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
    ITypography,
    ILocaleOption,
    IImageWithWidget,
} from './types';

export { getSchemaPropertiesByType } from './utils/widgets';
