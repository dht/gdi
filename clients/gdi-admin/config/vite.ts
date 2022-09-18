import * as path from 'path';
import { aliasExtra } from './vite.extra';

const cwd = path.resolve(process.cwd(), '../../');

export const alias = {
    '@gdi/app-login': `${cwd}/apps/app-login/src`,
    '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
    '@gdi/app-factory': `${cwd}/apps/app-factory/src`,
    '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
    '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
    '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
    '@gdi/store-factory': `${cwd}/stores/gdi-store-factory/src`,
    '@gdi/template-basic': `${cwd}/templates/gdi-template-basic/src`,
    '@gdi/template-blog': `${cwd}/templates/gdi-template-blog/src`,
    '@gdi/template-minimalist': `${cwd}/templates/gdi-template-minimalist/src`,
    '@gdi/platformer': `${cwd}/packages/platformer/src`,
    '@gdi/web-base-ui': `${cwd}/packages/gdi-web-base-ui/src`,
    '@gdi/web-ui': `${cwd}/packages/gdi-web-ui/src`,
    '@gdi/web-tables': `${cwd}/packages/gdi-web-tables/src`,
    '@gdi/web-forms': `${cwd}/packages/gdi-web-forms/src`,
    '@gdi/web-sheets': `${cwd}/packages/gdi-web-sheets/src`,
    '@gdi/web-editors': `${cwd}/packages/gdi-web-editors/src`,
    '@gdi/hooks': `${cwd}/packages/gdi-hooks/src`,
    '@gdi/galleries': `${cwd}/packages/gdi-galleries/src`,
    '@gdi/engine': `${cwd}/packages/gdi-engine/src`,
    'redux-connected': `${cwd}/submodules/redux-connected/src`,
    'shared-base': `${cwd}/submodules/shared-base/src`,
    'redux-connected-devtools': `${cwd}/submodules/redux-connected-devtools/src`,
    'redux-store-generator': `${cwd}/submodules/redux-store-generator/src`,
    igrid: `${cwd}/submodules/igrid/src`,
    isokit: `${cwd}/submodules/isokit/src`,
    firestore: `${cwd}/submodules/firestore-local/src`,
    ...aliasExtra,
};
