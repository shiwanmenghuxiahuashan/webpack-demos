const path = require("path");
module.exports = {
  mode: "production",
  entry: "./main.jsx",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        // test 属性，识别出哪些文件会被转换
        test: /\.jsx?$/,
        // exclude 属性，排除掉 node_modules 目录下的文件
        exclude: /node_modules/,
        // use 属性，指定使用的 loader
        use: {
          // loader 属性，指定具体的 loader ，如果有多个 loader ，则使用数组，从后往前执行（即从右往左执行）
          loader: "babel-loader",
          // 选项属性，指定 loader 的选项
          options: {
            // presets 属性，指定转换规则
            presets: ["es2015", "react"],
          },
        },
      },
    ],
  },
};
