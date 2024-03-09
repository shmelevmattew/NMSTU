import {buildOptions} from "./types/buildOptions";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
export default function buildDevServer(options:buildOptions) : DevServerConfiguration{
    return {
        port:options.port,
        open:true,
        historyApiFallback:true,
        hot: true,
    }
}