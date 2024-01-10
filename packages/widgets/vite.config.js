import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const ANALYZE_BUNDLE = false;

const cwd = path.resolve(process.cwd(), '../');

export default defineConfig({
  plugins: [dts({}), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'GdiWidgetsStarter',
      formats: ['es', 'umd'],
      fileName: (format) => `gdi-widgets-starter.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        react: '',
        'react-dom': '',
        'react/jsx-runtime': '',
        ...p.dependencies,
      }),
    },
  },
  resolve: {
    alias: {
      'shared-base': `${cwd}/shared-base/src`,
      '@gdi/ui': `${cwd}/gdi-ui/src`,
      '@gdi/store-base': `${cwd}/store-base/src`,
      '@gdi/store-iso': `${cwd}/store-iso/src`,
      igrid: `${cwd}/igrid/src`,
      multi: `${cwd}/multi/src`,
      isokit2: `${cwd}/isokit2/src`,
      widgets: `${cwd}/widgets/src`,
    },
  },
});
