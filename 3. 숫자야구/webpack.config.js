const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".vue", ".js"], // 확장자 처리 .js / .vue 를 쓰지 않아도 알 수 있다.
  },
  entry: {
    app: path.join(__dirname, "main"),
  },
  module: {
    rules: [
      // webpack는 js 파일만 합치는데 vue 파일이 등장하여 정규식과 vue-loader을 사용해줍니다.
      {
        test: /\.vue$/, // 파일명이 .vue로 끝나는 파일
        loader: "vue-loader", // use로 사용해도 가능 use: "vue-loader"
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js", // [name].js => app.js  entry에 있는 app:'./main.js' 앞 부분을 뜻한다.
    path: path.join(__dirname, "dist"), // 절대 경로로 해줘야한다.
  },
};
