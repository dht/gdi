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
            '@gdi/store-mixer': `${cwd}/packages/gdi-store-mixer/src`,
            '@gdi/store-site': `${cwd}/packages/gdi-store-site/src`,
            '@gdi/platformer': `${cwd}/packages/platformer/src`,
            '@gdi/template-gdi': `${cwd}/packages/gdi-template-gdi`,
            '@gdi/web-base-ui': `${cwd}/packages/gdi-web-base-ui/src`,
            '@gdi/web-ui': `${cwd}/packages/gdi-web-ui/src`,
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
