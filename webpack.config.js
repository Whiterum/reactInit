var path = require('path')

module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'entry.js'
    },
    module: {
       loaders: [ {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },] 
    } 
}
