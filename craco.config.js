const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0069d8',
              '@link-color': '#0069d8',
              '@border-radius-base': '1vmin',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
