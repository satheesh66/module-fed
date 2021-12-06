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
    publicPath: "https://127.0.0.1:9000/",
  },

  devServer: {
    port: 9000,
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
    new ModuleFederationPlugin({
      name: "newapp",
      filename: `remoteEntry.js`,
      // exposes: packageJson.exportedModules,
      remotes: {
        newapp1: "https://127.0.0.1:9001/remoteEntry.js/",
      },
      library: { type: "module" },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({ htmlWebpackPlugin }) => `
        <html>
          <head>
            ${Object.keys(htmlWebpackPlugin.files.css).map((key) => {
              return `<link rel="stylesheet" href="${htmlWebpackPlugin.files.css[key]}" />`;
            })}
            <base href="/" />
            
          </head>
          <body>
            <noscript>You need to enable javascript</noscript>
            <div id="root"></div>

            
            ${Object.keys(htmlWebpackPlugin.files.js).map((key) => {
              return `<script type="module" src="${htmlWebpackPlugin.files.js[key]}"></script>`;
            })}
            
            <script src="https://127.0.0.1:9001/remoteEntry.js" type="module"></script>
          </body>

        </html>

      `,
    }),
  ],
};
