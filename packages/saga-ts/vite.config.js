import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const ANALYZE_BUNDLE = true;

export default defineConfig({
  plugins: [dts({})],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SagaTs',
      formats: ['es', 'umd'],
      fileName: (format) => `saga-ts.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        'redux-saga/effects': 'redux-saga/effects',
        ...p.dependencies,
      }),
    },
  },
  resolve: {},
});
