
//导入处理路径的模块
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname,'./dist'),
		filename: 'build.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader','css-loader','less-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(png|jpg|gif|bmp|jpeg)$/,
				use: 'url-loader?limit=2000&name=[hash:8]-[name].[ext]'
			},
            {  //  配置处理 字体文件的第三方loader 规则
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                use: 'url-loader'
            },
            {  //  配置处理 .js 文件的 loader 模块
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
			},
			{  
				//处理 .vue 文件的loader
                test: /\.vue$/,
                use: 'vue-loader'
            }
		]
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.js"
		}
	}
}