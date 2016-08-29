# Brix

像使用原生元素一样使用组件。
<!-- Introduction -->

## 快速开始

1. 引入 Brix

    ```html
    <script src="//g.alicdn.com/thx/brix-release/1.0.0-alpha.2/require-config-css.js"></script>`
    ```


2. 配置 `bx-name`

    ```html
    <select bx-name="components/dropdown">
        <option>foo</option>
        <option>bar</option>
        <option>faz</option>
    </select>
    ```


3. 执行 `Loader.boot()`

    ```js
    var Loader = require('brix/loader')
    Loader.boot()
    ```


**运行结果：**

*TODO*

## 模块化的 Brix

*TODO*

Brix 由 Loader、Base、Event、Components 组成。

First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell

![Brix 架构图](lib/brix.png)