import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const ANALYZE_BUNDLE = false;

export default defineConfig({
    plugins: [dts({}), react()],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'WebEditors',
            formats: ['es', 'umd'],
            fileName: (format) => `web-editors.${format}.js`,
        },
        rollupOptions: {
            plugins: [ANALYZE_BUNDLE ? analyze() : null],
            ...externals({
                react: '',
                'monaco-editor/esm/vs/editor/editor.api': '',
                'monaco-editor/esm/vs/platform/theme/common/colorRegistry': '',
                'prosemirror-keymap': '',
                'prosemirror-gapcursor': '',
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
});
