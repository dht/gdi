import * as path from 'path';
import { aliasExtra } from './vite.extra';

const cwd = path.resolve(process.cwd(), '../../');

export const alias = {
    '@gdi/app-login': `${cwd}/apps/app-login/src`,
    '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
    '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
    '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
    '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
    '@gdi/template-gdi': `${cwd}/templates/gdi-template-gdi`,
    '@gdi/template-blog': `${cwd}/templates/gdi-template-blog`,
    '@gdi/platformer': `${cwd}/packages/platformer/src`,
    '@gdi/web-base-ui': `${cwd}/packages/gdi-web-base-ui/src`,
    '@gdi/web-ui': `${cwd}/packages/gdi-web-ui/src`,
    '@gdi/galleries': `${cwd}/packages/gdi-galleries/src`,
    '@gdi/web-forms': `${cwd}/packages/gdi-web-forms/src`,
    '@gdi/engine': `${cwd}/packages/gdi-engine/src`,
    'redux-connected': `${cwd}/submodules/redux-connected/src`,
    'shared-base': `${cwd}/submodules/shared-base/src`,
    'redux-connected-devtools': `${cwd}/submodules/redux-connected-devtools/src`,
    igrid: `${cwd}/submodules/igrid/src`,
    isokit: `${cwd}/submodules/isokit/src`,
    ...aliasExtra,
};
