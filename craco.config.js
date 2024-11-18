const webpack = require("webpack");
module.exports = {
  // ...
  webpack: {
    alias: {},
    configure: {
    output: {
        publicPath: 'http://localhost:3000/', // 在这里设置，运行时资源的请求路径
      },
    },
    plugins: {
      add: [
        new webpack.container.ModuleFederationPlugin({
            name: "MyMf",
            library: { type: "var", name: "MyMf" },
            filename: "remoteEntry.js",
            exposes: {
              "./Dealer": "./src/modules/dealers/index",
            },
            shared: {
              react: { singleton: true, eager: true },
              "react-dom": { singleton: true, eager: true },
            },
        }),
      ],
    },
  },
};