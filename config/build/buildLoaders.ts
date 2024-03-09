// @ts-ignore
import webpack from "webpack";
// @ts-ignore
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildOptions} from "./types/buildOptions";
import buildScssLoader from "./loaders/buildScssLoader";
import buildSvgLoader from "./loaders/buildSvgLoader";
export function buildLoaders(options:buildOptions):webpack.RuleSetRule[] {
    const typescriptLoader =  {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }
    const sassLoader = buildScssLoader(options.isDev)
    const svgLoader = buildSvgLoader()

    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff|woff2)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
    }
    const babelLoader =  {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    return [typescriptLoader,sassLoader,svgLoader,fileLoader,babelLoader]
}