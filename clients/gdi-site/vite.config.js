import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

// https://vitejs.dev/config/

export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        outDir: 'dist/site',
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
        visualizer(),
    ],
    resolve: {
        alias: {
            '@gdi/app-mixer': `${cwd}/apps/app-mixer/src`,
            '@gdi/store-auth': `${cwd}/stores/gdi-store-auth/src`,
            '@gdi/store-mixer': `${cwd}/stores/gdi-store-mixer/src`,
            '@gdi/store-site': `${cwd}/stores/gdi-store-site/src`,
            '@gdi/platformer': `${cwd}/packages/platformer/src`,
            '@gdi/template-starter': `${cwd}/packages/gdi-template-starter`,
            '@gdi/web-base-ui': `${cwd}/packages/gdi-web-base-ui/src`,
            '@gdi/web-ui': `${cwd}/packages/gdi-web-ui/src`,
            '@gdi/web-forms': `${cwd}/packages/gdi-web-forms/src`,
            '@gdi/engine': `${cwd}/packages/gdi-engine/src`,
            'redux-connected': `${cwd}/submodules/redux-connected/src`,
        },
    },
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
