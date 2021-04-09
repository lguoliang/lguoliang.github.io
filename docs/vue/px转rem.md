# px转rem

使用 postcss-pxtorem <!-- （6版本以上的依赖转化， 先使用@5） -->

```bash
yarn add -D postcss-pxtorem
```

## 配置

1. 可在vue.config.js里配置
    ```js
    module.exports = {
      css: {
        postcss: {
          plugins: [
            require('autoprefixer')({
              overrideBrowserslist: ['last 5 versions']
            }),
            require('postcss-pxtorem')({
              rootValue: 10,
              // selectorBlackList: ['ig'],
              propList: ['*'],
              exclude: /node_modules/
            })
          ]
        }
      }
    }
    ```
2. 可在根目录创建postcss.config.js进行配置
    ```js
    module.exports = {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['last 5 versions']
        }),
        require('postcss-pxtorem')({
          rootValue: 10,
          // selectorBlackList: ['ig'],
          propList: ['*'],
          exclude: /node_modules/
        })
      ]
    }
    ```
