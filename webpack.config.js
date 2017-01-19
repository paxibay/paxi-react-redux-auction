const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: [
    //'bootstrap-loader',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app_client/main.tsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: "[id].js",
    sourceMapFilename: "debugging/[file].map",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app_client/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        //loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'],
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'app_client')
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader?presets[]=es2015!ts-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      }, {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      }, {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      }
    ],

    //preloaders: [
    //  // all output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //  { test: /\.js$/, loader: 'source-map-loader' },
    //  {
    //    test: /\.json?$/,
    //    loader: 'json'
    //  }
    //]
  }
};


//const path = require('path');
//const merge = require('webpack-merge');
//const webpack = require('webpack');
//const NpmInstallPlugin = require('npm-install-webpack-plugin');

//const TARGET = process.env.npm_lifecycle_event;
//const PATHS = {
//  app: path.join(__dirname, 'app'),
//  build: path.join(__dirname, 'build')
//};

//process.env.BABEL_ENV = TARGET;

//const common = {
//  entry: {
//    app: PATHS.app
//  },
//  resolve: {
//    extensions: ['', '.js', '.jsx']
//  },
//  output: {
//    path: PATHS.build,
//    filename: 'bundle.js'
//  },
//  module: {
//    loaders: [
//      {
//        test: /\.css$/,
//        loaders: ['style', 'css'],
//        include: PATHS.app
//      },
//      {
//        test: /\.jsx?$/,
//        loaders: ['babel?cacheDirectory'],
//        include: PATHS.app
//      },
//      {
//        test: /\.(jpe?g|png|gif|svg)$/i,
//        loaders: [
//            'file?hash=sha512&digest=hex&name=[hash].[ext]',
//            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
//        ]
//      }
//    ]
//  }
//};

//if(TARGET === 'start' || !TARGET) {
//  module.exports = merge(common, {
//    devtool: 'eval-source-map',
//    devServer: {
//      contentBase: PATHS.build,

//      historyApiFallback: true,
//      hot: true,
//      inline: true,
//      progress: true,
//      stats: 'errors-only',
//      host: process.env.HOST,
//      port: process.env.PORT || 3000
//    },
//    plugins: [
//      new webpack.HotModuleReplacementPlugin(),
//      new NpmInstallPlugin({
//        save: true 
//      })
//    ]
//  });
//}

//if(TARGET === 'build') {
//  module.exports = merge(common, {});
//}
