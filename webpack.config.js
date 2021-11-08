const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );

const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const isProduction = defaultConfig.mode === 'production';

const config = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new WebpackRTLPlugin( {
			suffix: '-rtl',
			minify: isProduction ? { safe: true } : false,
		} ),
		new MiniCssExtractPlugin(),
	],
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: ! isProduction,
						},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
};

module.exports = [

	{
		...config,
		entry: {
			admin: './src/admin',
			public: './src/public',
		},
	},

];

