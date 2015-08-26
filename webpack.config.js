var bower_dir = __dirname + '/bower_components';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  entry: ['./ui/main.js'],
  resolve: { alias: {} },
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: 'assets/'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
};

config.addVendor('react', bower_dir + '/react/react.min.js');
config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js');
config.addVendor('bootstrap', bower_dir + '/bootstrap/dist/js/bootstrap.min.js');
config.addVendor('bootstrap.css', bower_dir + '/bootstrap/dist/css/bootstrap.min.css');

module.exports = config;