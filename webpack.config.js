var path = require('path')

module.exports = {
    entry: './app/main.js',
    output: {
        publicPath: 'http://127.0.0.1:8080/',
        path: './dist',
        filename: 'entry.js'
    },
    module: {
       loaders: [ {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },] 
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:8080 //端口你可以自定义
    } 
}
