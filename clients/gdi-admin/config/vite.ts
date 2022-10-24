import * as path from 'path';
import { aliasExtra } from './vite.extra';

const cwd = path.resolve(process.cwd(), '../../');

export const alias = {
    '@gdi/app-login': `${cwd}/apps/app-login/src`,
    '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
    '@gdi/app-factory': `${cwd}/apps/app-factory/src`,
    '@gdi/app-settings': `${cwd}/apps/app-settings/src`,
    '@gdi/app-dashboard': `${cwd}/apps/app-dashboard/src`,

    '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
    '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
    '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
    '@gdi/store-factory': `${cwd}/stores/gdi-store-factory/src`,
    '@gdi/store-dashboard': `${cwd}/stores/gdi-store-dashboard/src`,
    '@gdi/store-settings': `${cwd}/stores/gdi-store-settings/src`,

    '@gdi/template-starter': `${cwd}/packages/gdi-template-starter/src`,
    '@gdi/platformer': `${cwd}/packages/platformer/src`,
    '@gdi/web-base-ui': `${cwd}/packages/gdi-web-base-ui/src`,
    '@gdi/web-ui': `${cwd}/packages/gdi-web-ui/src`,
    '@gdi/web-tables': `${cwd}/packages/gdi-web-tables/src`,
    '@gdi/web-forms': `${cwd}/packages/gdi-web-forms/src`,
    '@gdi/web-editors': `${cwd}/packages/gdi-web-editors/src`,
    '@gdi/hooks': `${cwd}/packages/gdi-hooks/src`,
    '@gdi/engine': `${cwd}/packages/gdi-engine/src`,
    'redux-connected': `${cwd}/submodules/redux-connected/src`,
    'shared-base': `${cwd}/submodules/shared-base/src`,
    '@gdi/dnd': `${cwd}/submodules/gdi-dnd/src`,
    'redux-connected-devtools': `${cwd}/submodules/redux-connected-devtools/src`,
    'redux-store-generator': `${cwd}/submodules/redux-store-generator/src`,
    igrid: `${cwd}/submodules/igrid/src`,
    isokit: `${cwd}/submodules/isokit/src`,
    firestore: `${cwd}/submodules/firestore-local/src`,
    '@gdi/language': `${cwd}/packages/gdi-language/src`,
    '@gdi/language-en': `${cwd}/packages/gdi-language-en/src`,
    ...aliasExtra,
};
