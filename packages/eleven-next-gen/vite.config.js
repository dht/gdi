import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { externals } from 'shared-base';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import p from './package.json';

const ANALYZE_BUNDLE = true;

export default defineConfig({
  plugins: [dts({}), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ElevenNextGen',
      formats: ['es', 'umd'],
      fileName: (format) => `eleven-next-gen.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        ...p.dependencies,
      }),
    },
  },
  resolve: {
    alias: {},
  },
});
