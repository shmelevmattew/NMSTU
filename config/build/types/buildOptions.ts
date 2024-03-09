export type buildMode = 'production' | 'development' ;
export interface  buildPath {
    entry:string;
    build:string;
    html:string;
    src:string;
}
export interface buildEnv{
    mode:buildMode,
    port:number;
}
export interface buildOptions {
    mode : buildMode;
    paths : buildPath;
    port: number;
    isDev:boolean;
}