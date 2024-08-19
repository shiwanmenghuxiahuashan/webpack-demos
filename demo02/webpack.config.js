const path = require("path");
module.exports = {
  mode: "production",
  // 多入口起点(multiple entry point)
  entry: {
    bundle1: "./main1.js",
    // qiguaidewenjianmingcheng => "奇怪的文件名称"
    bundle2: "./qiguaidewenjianmingcheng.js",
  },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    // 占位符(substitutions) [id]、 [name]、[hash]、[chunkhash]
    filename: "[name].js",
  },
};
