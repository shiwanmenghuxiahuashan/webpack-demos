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

## 多入口 (multiple entry point)

在 `entry` 属性中指定多个入口起点，将创建多个 `"chunk"` （例如，多个 "bundle" 或多个 "entry"）。

```js
module.exports = {
    mode: "production",
    // 多入口起点(multiple entry point) 对象语法
    entry: {
        bundle1: "./main1.js",
        bundle2: "./main2.js",
    },
    output: {
        path: path.resolve(__dirname, "public", "dist"),
        // 占位符(substitutions)
        filename: "[name].js",
    },
};
```

## 多入口占位符  (multiple entry point substitutions)

对于单个入口起点， `filename` 会是一个静态名称。

如果配置中创建出多于一个 `"chunk"` ，则应该使用 `占位符(substitutions) ` 来确保每个文件具有 **唯一** 的名称。

```js
// webpack.config.js
module.exports = {
    //...
    output: {
        // [name] 就是 占位符(substitutions)
        filename: '[name].js',
    },
};
```

可在模块层面替换的 `占位符(substitutions) ` 内容：

1. `[id] `模块的 ID，通常是一个数字 ex：`215.js`,`12.js`
2. `[name] ` 如果设置，则为此 chunk 的名称，否则为 ID.ex: entry:`qiguaidewenjianmingcheng.js` => output:`bundle2.js`
3. `[hash] ` 模块的 Hash 值 ex：`b8e7f8c1e3b6a0c19e61.js`

## 参考

1. [入口起点(entry point)](https://webpack.docschina.org/concepts/entry-points/)
2. [对象语法](https://webpack.docschina.org/concepts/entry-points/#object-syntax)
