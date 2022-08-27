import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

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
            name: 'AppLogin',
            formats: ['es', 'umd'],
            fileName: (format) => `app-login.${format}.js`,
        },
        rollupOptions: {
            plugins: [analyze()],
            ...externals({
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
});
