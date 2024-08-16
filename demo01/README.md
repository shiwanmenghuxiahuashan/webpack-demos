# 相关知识点

## 入口(entry)

`入口起点(entry point) ` 告诉 webpack 应该从那个文件开始打包.

默认值是 `./src/index.js` , 可以通过在 `webpack.config.js` 中配置 `entry` 属性来指定一个不同的入口文件.

```js
// webpack.config.js
module.exports = {
    entry: './path/to/my/entry/file.js',
};
```

以上是 `entry` 属性的单个入口语法，是以下形式的简写 ：

```js
// webpack.config.js
module.exports = {
    entry: {
        main: './path/to/my/entry/file.js',
    },
};
```

##  依赖图(dependency graph) 

webpack 根据 `入口起点(entry point) ` 文件, 作为构建 `依赖图(dependency graph)` 的入口文件。
 
webpack 会找出入口起点（直接和间接）依赖的有模块和库有哪些。

假设你的项目结构如下 ：

```
main.js
module1.js
module2.js
module3.js
image.png
```

并且依赖关系如下 ：

```
main.js 依赖于 module1.js 和 module2.js
module1.js 依赖于 module3.js
module2.js 依赖于 image.png
```

那么依赖图可以表示为 ：

```
main.js
├── module1.js
│   └── module3.js
└── module2.js
│   └── image.png
```

每当一个文件依赖另一个文件时，webpack 都会将文件视为直接存在 `依赖关系` .

这使得 webpack 可以获取非代码资源，如 images 或 web 字体等。并会把它们作为 `依赖` 提供给应用程序。

从 `入口起点(entry point) ` 开始，webpack 会递归的构建一个 依赖关系图，这个依赖图包含着应用程序中所需的每个模块，然后将所有模块打包为少量的 `bundle(捆儿)` , —— 通常只有一个 —— 可由浏览器加载。

在编程中，bundle 通常指的是将多个文件或模块打包成一个文件的过程。这在前端开发中尤为常见，尤其是在使用模块化开发时。

bundle 可以帮助减少 HTTP 请求的数量，提高加载速度，并且可以进行代码压缩和优化。

## 输出(output)

`output` 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。

主要输出文件的默认值是 `./dist/main.js` ，其他生成文件默认放置在 `./dist` 文件夹中。

你可以通过在配置中指定一个 output 字段，来配置这些处理过程 ：

```js
// demo01/webpack.config.js
const path = require('path');
module.exports = {
    entry: "./main.js",
    output: {
        // 输出文件路径: 文件放置在 public/dist 目录下
        path: path.resolve(__dirname, "public", "dist"),
        // 输出文件名称: 文件名为 "my-first-webpack.bundle.js"
        filename: 'my-first-webpack.bundle.js',
    },
};
```

## 模式(mode)

`mode` 配置选项告诉 webpack 使用相应模式的内置优化。

可以设置以下三种模式之一 ：

1. `development` ：开发模式，提供有用的工具和详细的错误信息，未进行代码压缩。
2. `production` ：生产模式，启用各种优化功能，如代码压缩和树摇 (tree shaking)。
3. `none` ：不使用任何默认优化选项。

如果没有设置，webpack 会给 mode 的默认值设置为 production。

在 webpack.config.js 中配置 mode ：

```js
// webpack.config.js
module.exports = {
    mode: 'production', // 或 'development' 或 'none'
};
```

## 参考

1. [入口起点(entry point)](https://webpack.docschina.org/concepts/entry-points/)
2. [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)
3. [bundle](https://webpack.docschina.org/glossary/#b)
3. [输出(output)](https://webpack.docschina.org/concepts/#output)
