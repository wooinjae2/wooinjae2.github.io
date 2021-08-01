const withImages = require('next-images');

module.exports = {
  ...withImages(),
  future: {
    webpack5: true,
  },
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://wooinjae2.github.io/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  },
};
