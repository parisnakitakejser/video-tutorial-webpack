module.exports = {
  entry: {
      app: './app'
  },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },

    module: {
      rules: [{
        test: /\.tsx?$/, loader: "ts-loader"
      }]
    }

};