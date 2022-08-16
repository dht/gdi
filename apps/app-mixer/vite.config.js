import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externals } from 'shared-base';
import p from './package.json';

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'AppMixer',
            formats: ['es', 'umd'],
            fileName: (format) => `app-mixer.${format}.js`,
        },
        rollupOptions: {
            ...externals(p.dependencies),
        },
    },
});
