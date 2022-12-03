import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import { externals } from 'shared-base';
import p from './package.json';

const ANALYZE_BUNDLE = false;

export default defineConfig({
    plugins: [dts({}), react()],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Platformer',
            formats: ['es', 'umd'],
            fileName: (format) => `platformer.${format}.js`,
        },
        rollupOptions: {
            plugins: [ANALYZE_BUNDLE ? analyze() : null],
            ...externals({
                react: '',
                ...p.dependencies,
                '@firebase/auth': '',
                '@firebase/logger': '',
                '@firebase/analytics': '',
                '@firebase/storage': '',
                '@firebase/installations': '',
                '@firebase/firestore': '',
                '@firebase/firestore/lite': '',
                '@firebase/app': '',
                'react/jsx-runtime': '',
            }),
        },
    },
});
