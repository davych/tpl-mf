require('dotenv').config();
const webpack = require("webpack");
const { CracoAliasPlugin } = require('react-app-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    }
  ],
  webpack: {
    configure: {
      output: {
        publicPath: process.env.PUBLIC_PATH
      }
    },
    plugins: {
      add: [
        new webpack.container.ModuleFederationPlugin({
          name: "MercedesAfterSales",
          library: { type: "var", name: "MercedesAfterSales" },
          filename: "remoteEntry.js",
          exposes: {
            "./Dealer": "./src/modules/dealers/index",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        })
      ],
    },
  },
};