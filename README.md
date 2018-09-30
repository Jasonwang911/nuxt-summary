# nuxttop

> nuxt.wangshen.top

### 项目相关信息
1. 使用 yarn 管理依赖      
    全局安装 yarn ： npm install -g yarn   
    项目安装依赖：  yarn = yarn install   
    添加生产依赖：  yarn add xxx   
    添加开发依赖：  yarn add xxx --save-dev    
    删除开发依赖：  yarn remove xxx   
2. 修改element-ui主题色    
    a.全局安装element-theme： npm i element-theme -g   
    b.修改根目录下的 element-variables.scss 的配色信息   
    c.编译主题到styles目录下： et -o ./styles/theme 

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
