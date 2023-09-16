const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public")
    },
    target: "web",
    devServer: {
        static: ['./public'],
        port: 3000,
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}
