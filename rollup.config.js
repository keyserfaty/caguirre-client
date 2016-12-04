import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'
import html from 'rollup-plugin-html'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: [ '.css' ]
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    html({
      include: '**/*.html'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}
