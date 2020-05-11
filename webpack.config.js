const path = require("path");

module.exports = {
  mode: "production",
  target: "web",
  entry: "./src/wtc-tween.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "WTCTween",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: ["last 2 versions", "ie > 11"],
                },
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
          ],
        },
      },
    ],
  },
};
