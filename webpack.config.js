const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: "index.html",
  inject: "body",
});

const path = require("path");
module.exports = {
  entry: {
    index: `${__dirname}/src/index.js`,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      //JSX
      {
        test:  /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
      },
      //ES6
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 9000,
  },
  plugins: [HTMLWebpackPluginConfig],
  mode: 'development',
};
