const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const cssModules = 'modules&importLoaders=1&LocalIdentName=[name]__[local]__[hash:base64:5]';
const extractCSS = new MiniCssExtractPlugin({ filename: 'stylesheets/[name]-one.css' });

var t = path.resolve(__dirname)

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx']
	},

	entry: ['./src/index.jsx'],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},

	module: {
		rules: [
			{ test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src/components'),
				],
				use: [
					MiniCssExtractPlugin.loader,
					`css-loader?${cssModules}`
				]
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src/assets/css'),
				],
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	},

	devServer: {
		host: '0.0.0.0',
		port: 5001,
		inline: true,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
		extractCSS
	]
}
