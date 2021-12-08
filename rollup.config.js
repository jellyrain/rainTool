import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/rainTool.min.js',
        format: 'umd',
        name: 'rainTool',
        // sourcemap: true
    },
    plugins: [
        uglify(),
    ]
}