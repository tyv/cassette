var path = require('path');

module.exports = {
  components: 'packages/*/src/**/[A-Z]*.js',
  webpackConfig: {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@cassette/core': path.join(__dirname, 'packages/core/src'),
        '@cassette/components': path.join(__dirname, 'packages/components/src'),
        '@cassette/player': path.join(__dirname, 'packages/player/src')
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false, loose: true }],
                '@babel/react'
              ],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        },
        {
          test: /\.scss$/,
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    devtool: 'source-map',
    optimization: {
      noEmitOnErrors: true,
      minimize: false
    }
  },
  ignore: [
    '**/ShuffleManager.js',
    '**/PlayerPropTypes.js',
    '**/PlayerContext.js',
    '**/GroupContext.js',
    '**/FullscreenContext.js',
    '**/ButtonWrapper.js',
    '**/SkipButton.js',
    '**/MediaStatusBar.js'
  ],
  usageMode: 'expand',
  handlers(componentPath) {
    return require('react-docgen').defaultHandlers.concat(
      require('react-docgen-external-proptypes-handler')(componentPath),
      require('react-docgen-displayname-handler').createDisplayNameHandler(
        componentPath
      )
    );
  }
};
