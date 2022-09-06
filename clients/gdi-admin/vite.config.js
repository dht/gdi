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
            '@gdi/app-biblo': `${cwd}/apps/app-biblo/src`,
            '@gdi/app-debdb': `${cwd}/apps/app-debdb/src`,
            '@gdi/app-devtools': `${cwd}/apps/app-devtools/src`,
            '@gdi/app-events': `${cwd}/apps/app-events/src`,
            '@gdi/app-knowledge': `${cwd}/apps/app-knowledge/src`,
            '@gdi/app-login': `${cwd}/apps/app-login/src`,
            '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
            '@gdi/app-money': `${cwd}/apps/app-money/src`,
            '@gdi/app-ppl': `${cwd}/apps/app-ppl/src`,
            '@gdi/app-soundboard': `${cwd}/apps/app-soundboard/src`,
            '@gdi/app-spotify': `${cwd}/apps/app-spotify/src`,
            '@gdi/app-studio': `${cwd}/apps/app-studio/src`,
            '@gdi/app-tasks': `${cwd}/apps/app-tasks/src`,
            '@gdi/app-things': `${cwd}/apps/app-things/src`,
            '@gdi/app-voice': `${cwd}/apps/app-voice/src`,

            '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
            '@gdi/store-biblo': `${cwd}/stores/gdi-store-biblo/src`,
            '@gdi/store-deb': `${cwd}/stores/gdi-store-deb/src`,
            '@gdi/store-devtools': `${cwd}/stores/gdi-store-devtools/src`,
            '@gdi/store-events': `${cwd}/stores/gdi-store-events/src`,
            '@gdi/store-knowledge': `${cwd}/stores/gdi-store-knowledge/src`,
            '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
            '@gdi/store-money': `${cwd}/stores/gdi-store-money/src`,
            '@gdi/store-ppl': `${cwd}/stores/gdi-store-ppl/src`,
            '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
            '@gdi/store-soundboard': `${cwd}/stores/gdi-store-soundboard/src`,
            '@gdi/store-studio': `${cwd}/stores/gdi-store-studio/src`,
            '@gdi/store-tasks': `${cwd}/stores/gdi-store-tasks/src`,
            '@gdi/store-things': `${cwd}/stores/gdi-store-things/src`,
            '@gdi/store-voice': `${cwd}/stores/gdi-store-voice/src`,

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
