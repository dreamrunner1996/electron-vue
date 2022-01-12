# Electron-Vue-App

## ele-start
运行 electron 主程序
## serve
运行 electron 渲染程序

## electron/ipcRender.js
连接主程序和渲染程序的桥梁（把控制底层nodejs核心推到渲染程序中）


> 主程序
> > {
>   'key',
>   {
>       obj1: require('node-machine-id')
>    }
> }

> 渲染程序
> > window.key.obj1 可以访问 node-machine-id
