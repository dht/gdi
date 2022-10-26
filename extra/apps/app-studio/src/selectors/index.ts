import { studio } from '@gdi/store-studio';
import { soundboard } from '@gdi/store-soundboard';
import { auth } from '@gdi/store-auth';

export const selectorsSoundboard = soundboard.selectors;
export const selectors = studio.selectors;
export const selectorsAuth = auth.selectors;
