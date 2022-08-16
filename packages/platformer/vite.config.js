import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import { externals } from 'shared-base';
import p from './package.json';

export default defineConfig({
    plugins: [react(), dts({})],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Platformer',
            formats: ['es', 'umd'],
            fileName: (format) => `platformer.${format}.js`,
        },
        rollupOptions: {
            plugins: [analyze()],
            ...externals({
                ...p.dependencies,
                '@firebase/auth': '',
                '@firebase/analytics': '',
                '@firebase/installations': '',
                '@firebase/app': '',
                'react/jsx-runtime': '',
            }),
        },
    },
});
