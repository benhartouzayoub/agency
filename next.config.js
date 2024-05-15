const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  target: 'serverless',
};

module.exports = withPlugins([
  [optimizedImages, {
    /* config for optimizedImages here */
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    svgo: {
      // svgo config
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
], nextConfiguration);