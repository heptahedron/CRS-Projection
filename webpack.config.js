var path = require('path')
var webpack = require('webpack')

module.exports ={
	entry: './projection.js',
	output: 'bundle.js',
	watch: true,
	devtool: 'source-map',
	module: {
		loaders:[
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query:{
					presets: ['es2015']
				}
			},
			{ test: /\.json$/, 
				loader: 'json-loader' 
			}
		]
	}

}
