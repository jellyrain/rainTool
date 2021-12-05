import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/rainTool-expand.min.js',
        format: 'umd',
        name: 'jTool',
        // sourcemap: true
    },
    plugins: [
        uglify(),
    ]
}