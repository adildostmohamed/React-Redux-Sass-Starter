var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
          'style-loader', // backup loader when not building .css file
          'css-loader!sass-loader' // loaders to preprocess CSS
      )
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('public/styles/styles.css', {allChunks: true})
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
