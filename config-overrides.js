const path = require('path');
const { getBabelLoader } = require('customize-cra');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    const bl = getBabelLoader(config, false);
    bl.loader = 'esbuild-loader';
    bl.options = {
      loader: 'tsx',
      target: 'es2015'
    }
    // ...add your webpack config
    const { 
      resolve: {
        alias,
      } = {}
    } = config;
    alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function(paths, env) {
    // ...add your paths config
    return paths;
  },
}
