import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import { externals } from 'shared-base';
import p from './package.json';

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Storeevents',
            formats: ['es', 'umd'],
            fileName: (format) => `store-events.${format}.js`,
        },
        rollupOptions: {
            plugins: [analyze()],
            ...externals(p.dependencies),
        },
    },
});
