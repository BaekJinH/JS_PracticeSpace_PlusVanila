const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: './resources/ts/jsComp/notPlugTs.js', // 원본 JavaScript 파일의 경로
    output: {
      filename: 'main.js', // 브라우저에서 사용할 파일 이름
      publicPath: "./resources/finalCompJs",
      path: path.resolve(__dirname, './resources/finalCompJs'), // 생성된 파일이 저장될 디렉토리
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
};
