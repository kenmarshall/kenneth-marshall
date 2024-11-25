const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "docs") // Output directory
  },
  mode: "development", // Set to 'production' for optimized builds
  devServer: {
    static: {
      directory: path.join(__dirname, "dist") // Directory to serve
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the server
    open: true, // Automatically open the browser
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/, 
        type: 'asset/resource', 
      },
    ]
  }
};
