import {buildOptions} from "./types/buildOptions";
// @ts-ignore
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: buildOptions):webpack.Configuration{

    const {paths,mode} = options

    return  {
        mode:mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path:paths.build,
            clean:true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool:options.isDev?"inline-source-map":undefined,
        devServer:options.isDev?buildDevServer(options):undefined,
    }
}