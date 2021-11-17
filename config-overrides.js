const path = require('path');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
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
