import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
// import copy from 'rollup-plugin-copy';
import { externals } from 'shared-base';
import p from './package.json';

export default defineConfig({
    plugins: [
        react(),
        dts({}),
        // copy({
        //     targets: [
        //         {
        //             src: path.resolve(__dirname, 'src/**/*.webp'),
        //             dest: 'dist/public/images',
        //         },
        //     ],
        //     hook: 'writeBundle',
        // }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'TemplateBlog',
            formats: ['es', 'umd'],
            fileName: (format) => `template-blog.${format}.js`,
        },
        rollupOptions: {
            plugins: [analyze()],
            ...externals({
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
});
