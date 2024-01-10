import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { externals } from 'shared-base';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import p from './package.json';

const ANALYZE_BUNDLE = true;

const cwd = path.resolve(process.cwd(), '../');

export default defineConfig({
  plugins: [dts({}), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'GdiFirebase',
      formats: ['es', 'umd'],
      fileName: (format) => `gdi-firebase.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        'firebase/app': '',
        'firebase/analytics': '',
        'firebase/firestore': '',
        'firebase/auth': '',
        react: '',
        'react-dom': '',
        'react/jsx-runtime': '',
        ...p.dependencies,
      }),
    },
  },
  resolve: {
    alias: {},
  },
});
