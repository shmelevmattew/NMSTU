import {ResolveOptions} from "webpack";
import {buildOptions} from "./types/buildOptions";

export function buildResolvers(options:buildOptions): ResolveOptions {
    return {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        preferAbsolute:true,
        modules:[
            options.paths.src,"node_modules"
        ],
        mainFiles:['index'],
        alias:{}
    }
}