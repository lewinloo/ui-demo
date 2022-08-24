## 开发流程

预览组件库文档

```shell
yarn:docs
```

启动开发文档

```shell
yarn dev:md
```

启动开发组件

```shell
yarn dev:ui
```

## 开发一个组件流程

- 开发新的组件需要在 packages/vantui/src 下创建该组件名的目录，组件名称风格参考该目录下其他组件的命名风格
- 控制样式的属性变量需要在 packages/vantui/src/style/var.less 中编写，具体操作参考文件。这里的样式变量可以通过 ConfigProvider 组件改变。
- 组件类型在 packages/vantui/types 目录下定义，具体参考该目录下其他的类型文件
- 新组件的目录下需要 index.less 和 index.tsx 两个文件，wsx.ts 是该组件的工具库。样式类名称遵守 BEM 规范，具体参考其他组件样式文件

## 文档开发流程

- 在 packages/vantui-doc/src 下创建一个新组件的文档，具体参考其他文件
- 创建完后需要在 vant.config.js 配置该组件文档路由
- 编写完组件的文档及配置后，会自动生成在 vantui-demo 中
