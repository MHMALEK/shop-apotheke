const nextConfig = {
  target: process.env.NODE_ENV !== 'production' ? 'server' : 'serverless',
  env: {
    BASE_API_URL: 'https://api.github.com/search/repositories',
    DEFAULT_TITLE: 'SHOP APOTHOKE',
  },
};

module.exports = nextConfig;
