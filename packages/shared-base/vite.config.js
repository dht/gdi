import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externals } from './src/rollup';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';

const ANALYZE_BUNDLE = false;

export default defineConfig({
    plugins: [dts({})],
    build: {
        sourcemap: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'SharedBase',
            formats: ['es', 'umd'],
            fileName: (format) => `shared-base.${format}.js`,
        },
        rollupOptions: {
            plugins: [ANALYZE_BUNDLE ? analyze() : null],
            ...externals({
                react: '',
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
});
