import { Configuration } from 'webpack';
import { smart as smartMerge } from 'webpack-merge';
import baseConfig from './base.config';
import { resolve } from 'path';
import HtmlPlugin from 'html-webpack-plugin';

const config: Configuration = smartMerge(baseConfig, {
  mode: 'development',
  target: 'electron-renderer',
  entry: resolve(__dirname, '../src/renderer/index'),
  output: {
    filename: 'renderer.js',
    path: resolve(__dirname, '../node_modules/.build'),
    pathinfo: false,
  },
  plugins: [
    new HtmlPlugin({
      inject: 'head',
      template: '!!@piuccio/ejs-compiled-loader!./src/renderer/index.ejs',
      showErrors: true,
    })
  ]
});

export default config;
