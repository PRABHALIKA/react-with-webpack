var hwp=require('html-webpack-plugin');

var rootFile=new hwp({
    'template':'./src/index.html'
})
module.exports={
    devtool:"source-map",
    module:{
        rules:[
        {
            'test':/\.js$/,
            'exclude':/node_modules/,
            'loader':'babel-loader'
        },
        {
            'test':/\.css$/,
            'use':["style-loader","css-loader"]
        }
    ]
    },
   plugins:[rootFile]


}