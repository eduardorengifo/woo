module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/', '/.next/'],
        loader: 'eslint-loader'
      });
    }
    return config;
  }
};
