import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

const config = defineConfig({
  input: ['src/index.ts'],
  output: [
    {
      dir: 'dist/mjs',
      format: 'esm',
      sourcemap: false,
      compact: true,
      minifyInternalExports: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
  ],
  external: ['ethers', 'ethers/lib/utils', 'graphql', 'graphql-request', 'typechain', 'lodash'],
  context: 'window',
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
  },
  plugins: [
    json(),
    resolve({
      preferBuiltins: true,
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
});

export default config;
