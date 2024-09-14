const path = require("path");
module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
