const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
    module: {
        rules: [
            /* component rules */
            {
                test: /\.css$/i,
                exclude: /styles/,
                use: ["to-string-loader", "css-loader"]
            },
            /* global style rules */
            {
                test: /\.css$/i,
                include: /styles/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html"
        })
    ]
};
