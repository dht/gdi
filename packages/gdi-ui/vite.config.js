import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const ANALYZE_BUNDLE = true;

const cwd = path.resolve(process.cwd(), '../');

export default defineConfig({
  plugins: [dts({}), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'GdiUi',
      formats: ['es', 'umd'],
      fileName: (format) => `gdi-ui.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        react: '',
        'monaco-editor/esm/vs/editor/editor.api': '',
        'monaco-editor/esm/vs/platform/theme/common/colorRegistry': '',
        'react-dom': '',
        'wavesurfer.js/dist/plugins/regions.js': '',
        'wavesurfer.js/*': '',
        'react-select/creatable': '',
        'react-toastify': '',
        '@hookform/resolvers/yup': '',
        'highlight.js/lib/core': '',
        'highlight.js/lib/languages/json': '',
        'highlight.js/lib/languages/javascript': '',
        'highlight.js/lib/languages/typescript': '',
        'highlight.js/lib/languages/bash': '',
        'dayjs/plugin/advancedFormat': '',
        'dayjs/plugin/relativeTime': '',
        'dayjs/plugin/duration': '',
        'react/jsx-runtime': '',
        ...p.dependencies,
      }),
    },
  },
  resolve: {
    alias: {
      '@gdi/base-ui': `${cwd}/gdi-base-ui/src`,
      '@gdi/editors': `${cwd}/gdi-editors/src`,
      '@gdi/forms': `${cwd}/gdi-forms/src`,
      '@gdi/tables': `${cwd}/gdi-tables/src`,
    },
  },
});
