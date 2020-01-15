const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: "source-map",
	entry: {
		mergely: './src/mergely.js',
	},
	output: {
		path: path.join(__dirname, 'lib'),
		filename: './[name].js',
		library: 'mergely',
		libraryTarget: 'commonjs-module',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}]
	},
	resolve: {
		extensions: ['.js']
	},
	externals: {
		jquery: 'jQuery',
		"v1/ext/CognosExtGit/js/lib/codemirror.js":
		  "v1/ext/CognosExtGit/js/lib/codemirror.js"
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'src/mergely.css',
			to: 'mergely.css',
			toType: 'file'
		}])
	]
};
