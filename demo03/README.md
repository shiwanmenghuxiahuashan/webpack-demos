# 相关知识

## 加载器 (loader)

loader 用于对模块的源代码进行转换

## Babel-loader

Loaders are preprocessors which transform a resource file of your app ([more info](https://webpack.js.org/concepts/loaders/)) before webpack's building process.

For example, [Babel-loader](https://www.npmjs.com/package/babel-loader) can transform JSX/ES6 file into normal JS files，after which webpack will begin to build these JS files. webpack's official doc has a complete list of [loaders](https://webpack.js.org/loaders/).

`main.jsx` is a JSX file.

```javascript
// main.jsx
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render( <
    h1 > Hello, world! < /h1>,
    document.querySelector('#wrapper')
);
```

index.html

```html
<html>

<body>
    <div id="wrapper"></div>
    <script src="bundle.js"></script>
</body>

</html>
```

webpack.config.js

```javascript
module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }]
    }
};
```

The above snippet uses `babel-loader` which needs Babel's preset plugins [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) and [babel-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile ES6 and React.
