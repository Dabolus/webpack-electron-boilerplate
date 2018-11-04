/* tslint:disable:object-literal-sort-keys */
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { smart as smartMerge } from 'webpack-merge';
import baseConfig from './base.config';

const config: Configuration = smartMerge(baseConfig, {
  mode: 'development',
  target: 'electron-main',
  entry: resolve(__dirname, '../src/main/index'),
  output: {
    filename: 'main.js',
    path: resolve(__dirname, '../node_modules/.build'),
    pathinfo: false,
  },
});

export default config;
