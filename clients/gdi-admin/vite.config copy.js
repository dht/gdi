import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { alias } from './config/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        build: {
            sourcemap: false,
        },
        plugins: [
            tsconfigPaths({
                loose: true,
            }),
            react(),
        ],
        resolve: {
            alias,
        },
        define: {},
        server: {
            host: true,
            port: 3000,
        },
        rollupOptions: {
            output: {
                sourcemap: true,
            },
            plugins: [
                visualizer({
                    sourcemap: true,
                }),
            ],
        },
    };
});
