import { business } from '@gdi/store-business';
import { settings } from '@gdi/store-settings';
import { auth } from '@gdi/store-auth';
import { site } from '@gdi/store-site';

export const selectors = {
    raw: {
        ...auth.selectors.raw,
        ...business.selectors.raw,
        ...site.selectors.raw,
        ...settings.selectors.raw,
    },
    base: {
        ...auth.selectors.base,
        ...business.selectors.base,
        ...site.selectors.base,
        ...settings.selectors.base,
    },
    options: {
        ...auth.selectors.options,
        ...business.selectors.options,
        ...site.selectors.options,
        ...settings.selectors.options,
    },
};
