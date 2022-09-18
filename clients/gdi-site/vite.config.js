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
            '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
            '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
            '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
            '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
            '@gdi/platformer': `${cwd}/packages/platformer/src`,
            '@gdi/template-basic': `${cwd}/templates/gdi-template-basic`,
            '@gdi/template-minimalist': `${cwd}/templates/gdi-template-minimalist`,
            '@gdi/template-blog': `${cwd}/templates/gdi-template-blog`,
            '@gdi/web-base-ui': `${cwd}/packages/gdi-web-base-ui/src`,
            '@gdi/web-ui': `${cwd}/packages/gdi-web-ui/src`,
            '@gdi/galleries': `${cwd}/packages/gdi-galleries/src`,
            '@gdi/web-forms': `${cwd}/packages/gdi-web-forms/src`,
            '@gdi/engine': `${cwd}/packages/gdi-engine/src`,
            'redux-connected': `${cwd}/submodules/redux-connected/src`,
            igrid: `${cwd}/submodules/igrid/src`,
        },
    },
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
