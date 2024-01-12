import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { externals } from 'shared-base';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import p from './package.json';

const ANALYZE_BUNDLE = true;

const cwd = path.resolve(process.cwd(), '../');

export default defineConfig({
  plugins: [dts({})],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AIRunner',
      formats: ['es', 'umd'],
      fileName: (format) => `ai-runner.${format}.js`,
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
    alias: {},
  },
});
