'use strict';

var webpack = require('webpack');
var argv = require('yargs').argv;
var path = require('path');
var autoprefixer = require('autoprefixer');
var assets = require('postcss-assets');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PATHS = {
    app: __dirname + '/src/media/js'
};

var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
	new ExtractTextPlugin('../css/[name].css'),
	new webpack.ProvidePlugin({
		React: "react",
		ReactDOM: "react-dom",
		classNames: "classnames",
		TweenMax: "TweenMax"
	})
];

if (argv.production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        compress: true,
        comments: false,
	    drop_console: true,
	    warnings: true
    }));
}

var sassLoaders = [
	'css-loader',
	'postcss-loader',
	'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src/media/sass')
];

var config = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/,
                    /bower_components/
                ],
                include: PATHS.app,
                loader: 'babel-loader',
                query: {
                    presets: [
                    	'es2015',
	                    'react'
                    ]
                }
            },
            {
                test: /\.json?$/,
                loader: 'json-loader',
            },
	        {
		        test: /\.sass$/,
		        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
	        }
        ],
    },
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		}),
		assets({
			basePath: 'src/',
			baseUrl: '../',
			loadPaths: ['media/img/']
		})
	],
    watch: argv.production ? false : true,
	watchOptions: {
		aggregateTimeout: 1000
	},
    resolve:  {
	    alias: {
		    'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
		    'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
		    'TweenLite': path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
		    'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
		    'ScrollToPlugin': path.resolve('node_modules', 'gsap/src/uncompressed/plugins/ScrollToPlugin.js'),
		    'Draggable': path.resolve('node_modules', 'gsap/src/uncompressed/utils/Draggable.js')
	    },
        extensions: ['', '.js', '.jsx', '.sass'],
        modulesDirectories: ['node_modules', 'bower_components'],
	    root: [path.join(__dirname, './src/')]
    },
    plugins: plugins,
    debug: argv.production ? false : true,
    devtool: argv.production ? null : '#eval',
    externals: {
        '../TweenLite': 'TweenLite',
        './TweenLite': 'TweenLite',
        'TweenLite': 'TweenLite',
        '../CSSPlugin': 'CSSPlugin',
        './CSSPlugin': 'CSSPlugin',
        'CSSPlugin': 'CSSPlugin',
        'jquery': 'jQuery'
    }
};

module.exports = config;
