const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    domains: ['via.placeholder.com'],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    return config;
  },
};
