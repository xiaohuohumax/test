import { defineConfig } from "rollup";
import dts from 'rollup-plugin-dts'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig([
    {
        input: 'src/index.ts',
        output: {
            format: 'esm',
            entryFileNames: '[name].mjs',
            dir: 'dist'
        },
        plugins: [typescript()]
    },
    {
        input: 'src/index.ts',
        output: {
            format: 'cjs',
            entryFileNames: '[name].cjs',
            dir: 'dist'
        },
        plugins: [typescript()]
    },
    {
        input: 'src/index.ts',
        output: {
            format: 'esm',
            entryFileNames: '[name].d.ts',
            dir: 'dist'
        },
        plugins: [
            dts()
        ]
    }
])