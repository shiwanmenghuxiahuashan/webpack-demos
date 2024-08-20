# 相关知识

## 加载器 (loader)

**webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。**

`loader` 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。

在更高层面，在 webpack 的配置中，loader 有两个属性：

1. `test` 属性，识别出哪些文件会被转换。
2. `use` 属性，定义出在进行转换时，应该使用哪个 `loader。`

```js
// webpack.config.js
const path = require('path');

module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }],
    },
};
```

以上配置中，对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性： `test` 和 `use` 。这告诉 webpack 编译器(compiler) 如下信息：

> “嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先 use(使用) raw-loader 转换一下。”

`module.rules` 属性是一个数组，包含了一条条规则，告诉 webpack 在遇到哪些文件时应该使用哪些 loader。

### loader 使用

1. module.rules 允许你在 webpack 配置中指定多个 loader。
2. loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)

在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。

```js
module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                {
                    loader: 'sass-loader'
                },
            ],
        }, ],
    },
};
```

webpack 的官方文档有完整的 [loaders](https://webpack.docschina.org/loaders/)。

## Babel-loader

`Babel-loader` 可以将JSX/ES6文件转换为普通的JS文件，之后Webpack将开始构建这些JS文件。 

```js
// webpack.config.js
const path = require("path");
module.exports = {
    mode: "production",
    entry: "./main.jsx",
    output: {
        path: path.resolve(__dirname, "public", "dist"),
        filename: "[name].js",
    },

    module: {
        rules: [{
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
            }
        }]
    }
};
```

在上面的配置中，我们指定了一个 loader，即 babel-loader，它会将所有的 .jsx 文件转换为 ES5 代码。

## Babel

> Babel 是一个 JavaScript 编译器，主要用于将 ECMAScript 2015+ 代码转换为当前和旧版浏览器或环境中的向后兼容版本的 JavaScript。

对于刚开始学习前端工程化 或者 刚接触 webpack 的同学来说，不必过于纠结关于 Babel 的原理，工作方式，只需要知道：

**Babel 可以将 ES6/ES7 代码转换为 ES5 代码，从而在现有环境中执行。**

说白了，他是一个翻译，将JS的各种方言翻译成浏览器能认定的普通话，以便执行。

## 参考

* [loader 概念](https://webpack.docschina.org/concepts/loaders/)
* [loaders列表](https://webpack.docschina.org/loaders/)
* [Babel 官网](https://babeljs.io/)
* [npm Babel-loader](https://www.npmjs.com/package/babel-loader)
* [webpack Babel-loader](https://webpack.docschina.org/loaders/babel-loader/#root)
