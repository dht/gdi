import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const ANALYZE_BUNDLE = true;

const root = path.resolve(process.cwd(), '.');
const cwd = path.resolve(process.cwd(), '../');

const chunks = splitVendorChunkPlugin({
  strategy: 'default',
  customSplitting: {
    'react-vendor': ['react', 'react-dom', 'redux', 'react-redux'],
    isokit2: ['isokit2'],
    babylon: [
      '@babylonjs/core',
      '@babylonjs/loaders',
      '@babylonjs/materials',
      '@babylonjs/inspector',
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/landing/',
    build: {
      sourcemap: false,
    },
    plugins: [
      tsconfigPaths({
        loose: true,
        root: `${root}/dev`,
      }),
      react(),
      visualizer(),
    ],
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
    },
    resolve: {
      alias: {
        'shared-base': `${cwd}/packages/shared-base/src`,
        '@gdi/auth': `${cwd}/packages/gdi-auth/src`,
        '@gdi/firebase': `${cwd}/packages/gdi-firebase/src`,
        '@gdi/ui': `${cwd}/packages/gdi-ui/src`,
        '@gdi/widgets-starter': `${cwd}/packages/widgets/src`,
        '@gdi/store-base': `${cwd}/packages/store-base/src`,
        '@gdi/store-iso': `${cwd}/packages/store-iso/src`,
        '@gdi/app-root': `${cwd}/apps/root/src`,
        '@gdi/app-boards': `${cwd}/apps/boards/src`,
        '@gdi/app-home': `${cwd}/apps/home/src`,
        'redux-connected': `${cwd}/packages/redux-connected/src`,
        'redux-store-generator': `${cwd}/packages/redux-store-generator/src`,
        igrid: `${cwd}/packages/igrid/src`,
        multi: `${cwd}/packages/multi/src`,
        isokit2: `${cwd}/packages/isokit2/src`,
        'react-redux/(.*)': `${cwd}node_modules/react-redux/$1`,
        'react/(.*)': `${cwd}node_modules/react/$1`,
        'react-dom/(.*)': `${cwd}node_modules/react-dom/$1`,
      },
    },
    define: {},
    server: {
      host: true,
      port: 3000,
      hmr: {
        overlay: false,
      },
    },
  };
});
