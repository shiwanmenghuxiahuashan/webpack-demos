import writeHeadStr from "./module1.js";

const headStrList = [
  "webpack demo01",
  "入口(entry)",
  "依赖图(dependency graph)",
  "bundle",
  "输出(output)",
  "模式(mode)",
  "webpack.config.js",
  "package.json",
];

function main() {
  console.log("main.js is running");
  writeHeadStr(headStrList);
}

// 可注释 main 方法调用,然后允许 pnpm build 查看构建结果.
// 看看发生了什么.
// 后续示例会讲解这种情况的原因与作用
main();
