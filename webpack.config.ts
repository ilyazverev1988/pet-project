import webpack from "webpack";
import {buildWebpackConfg} from "./config/build/buildWebpackConfg";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname,"public", "index.html"),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfg({
        mode,
        paths,
        isDev,
        port: PORT,
    })
    return config;
};
