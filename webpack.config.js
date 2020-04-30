const path=require('path')

module.exports={
    //模式
    mode:'development',//开发的模式
    
    //入口
    entry:'./src/index.js',

    //出口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'sun-utils.js',
        library:'myUtils',//向外暴露的对象的名称
        libraryTarget:'umd'//打包生成库可以通过esm/commonjs/reqirejs的语法引入
    }
}