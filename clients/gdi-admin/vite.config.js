import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@gdi/app-login': `${cwd}/apps/app-login/src`,
            '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
            '@gdi/app-biblo': `${cwd}/submodules/gdi-extra/apps/app-biblo/src`,
            '@gdi/app-debdb': `${cwd}/submodules/gdi-extra/apps/app-debdb/src`,
            '@gdi/app-devtools': `${cwd}/submodules/gdi-extra/apps/app-devtools/src`,
            '@gdi/app-events': `${cwd}/submodules/gdi-extra/apps/app-events/src`,
            '@gdi/app-knowledge': `${cwd}/submodules/gdi-extra/apps/app-knowledge/src`,
            '@gdi/app-money': `${cwd}/submodules/gdi-extra/apps/app-money/src`,
            '@gdi/app-ppl': `${cwd}/submodules/gdi-extra/apps/app-ppl/src`,
            '@gdi/app-soundboard': `${cwd}/submodules/gdi-extra/apps/app-soundboard/src`,
            '@gdi/app-spotify': `${cwd}/submodules/gdi-extra/apps/app-spotify/src`,
            '@gdi/app-studio': `${cwd}/submodules/gdi-extra/apps/app-studio/src`,
            '@gdi/app-tasks': `${cwd}/submodules/gdi-extra/apps/app-tasks/src`,
            '@gdi/app-things': `${cwd}/submodules/gdi-extra/apps/app-things/src`,
            '@gdi/app-voice': `${cwd}/submodules/gdi-extra/apps/app-voice/src`,

            '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
            '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
            '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
            '@gdi/store-biblo': `${cwd}/submodules/gdi-extra/stores/gdi-store-biblo/src`,
            '@gdi/store-deb': `${cwd}/submodules/gdi-extra/stores/gdi-store-deb/src`,
            '@gdi/store-devtools': `${cwd}/submodules/gdi-extra/stores/gdi-store-devtools/src`,
            '@gdi/store-events': `${cwd}/submodules/gdi-extra/stores/gdi-store-events/src`,
            '@gdi/store-knowledge': `${cwd}/submodules/gdi-extra/stores/gdi-store-knowledge/src`,
            '@gdi/store-money': `${cwd}/submodules/gdi-extra/stores/gdi-store-money/src`,
            '@gdi/store-ppl': `${cwd}/submodules/gdi-extra/stores/gdi-store-ppl/src`,
            '@gdi/store-soundboard': `${cwd}/submodules/gdi-extra/stores/gdi-store-soundboard/src`,
            '@gdi/store-studio': `${cwd}/submodules/gdi-extra/stores/gdi-store-studio/src`,
            '@gdi/store-tasks': `${cwd}/submodules/gdi-extra/stores/gdi-store-tasks/src`,
            '@gdi/store-things': `${cwd}/submodules/gdi-extra/stores/gdi-store-things/src`,
            '@gdi/store-voice': `${cwd}/submodules/gdi-extra/stores/gdi-store-voice/src`,

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
        },
    },
    define: {},
    server: {
        host: true,
        port: 3000,
    },
});
