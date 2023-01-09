import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
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
        alias: {},
    },
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
