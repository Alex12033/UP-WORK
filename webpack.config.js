const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    autoplayVideo: path.resolve(__dirname, "./src/autoplay.js"),
    payPalBtn: path.resolve(__dirname, "./src/payPalBtn.js"),
    animationAos: path.resolve(__dirname, "./src/aosAnimationConfig.js"),
    particles: path.resolve(__dirname, "./src/particles.js"),
    style: path.resolve(__dirname, "./src/style.js"),
    progressBar: path.resolve(__dirname, "./src/progressBar.js"),
    preloader: path.resolve(__dirname, "./src/preloaderPage.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./"),
    open: true,
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }), //for unpack css styles in bundle

    new TerserPlugin(), //for minification js code

    new OptimizeCssAssetsPlugin(), //for minification css

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",

      excludeChunks: [],

      chunks: [
        "autoplayVideo",
        "payPalBtn",
        "animationAos",
        "particles",
        "style",
        "progressBar",
        "preloader"
      ],
    }),
  ],
};
