import { defineConfig } from 'rollup'


export default defineConfig({
    input: 'main.ts',
    output: {
        dir: 'dist',
        format: 'es'
    }
})