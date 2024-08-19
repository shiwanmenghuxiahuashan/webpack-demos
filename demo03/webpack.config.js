const path = require("path");
module.exports = {
  // 模式(mode)
  mode: "production",
  entry: "./main.jsx",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
          },
        },
      },
    ],
  },
};
