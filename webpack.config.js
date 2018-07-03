const path = require("path");

module.exports = {
    entry: "./bin/app.js",
    mode: "development",
    watch: true,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        modules: ['node_modules']
    },
    externals: {
        "__atoms": "__atoms"
    }
};