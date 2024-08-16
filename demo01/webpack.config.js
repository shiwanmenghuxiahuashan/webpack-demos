const path = require("path");
module.exports = {
  // 模式(mode)
  mode: "production",
  // 入口起点(entry point)
  entry: "./main.js",
  // 输出(output)
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
