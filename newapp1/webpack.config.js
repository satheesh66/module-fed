const path = require("path");
const packageJson = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    // environment: {
    //   module: true,
    // },
    module: true,
    publicPath: "https://127.0.0.1:9001/",
  },

  devServer: {
    port: 9001,
    // open: true,//for new tap for every start
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  target: "es2020",

  experiments: {
    outputModule: true,
  },
  externals: packageJson.externals["development"],
  externalsType: "module",
  node: false,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["@babel/preset-react"]],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "newapp1",
      filename: "remoteEntry.js",
      library: { type: "module" },
      exposes: {
        "./app": "./src/test/index.jsx",
      },
      // remotes: ,
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
