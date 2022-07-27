const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "",
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
					{
						loader: "postcss-loader",
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "bundle.css",
		}),
		new Dotenv(),
	],

	devServer: {
		historyApiFallback: true,
		open: true,
		port: 3000,
		writeToDisk: true,
		proxy: {
			"/": "http://localhost:8080",
		},
	},

	mode: "development",
};
