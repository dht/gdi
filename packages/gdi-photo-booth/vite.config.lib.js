import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

export default defineConfig({
    plugins: [react(), dts({})],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'WebForms',
            formats: ['es', 'umd'],
            fileName: (format) => `photo-booth.${format}.js`,
        },
        rollupOptions: {
            plugins: [analyze()],
            ...externals({
                react: '',
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
});
