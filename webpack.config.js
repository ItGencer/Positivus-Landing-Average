const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // або 'production'
  entry: './src/index.js', // Вхідний файл JavaScript
  output: {
    filename: 'index.js', // Вихідний файл JavaScript
    path: path.resolve(__dirname, 'public'), // Папка для збірки
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Обробка зображень
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images', // Зберігати зображення в папці `public/images`
            },
          },
        ],
      },
      {
        test: /\.scss$/, // Регулярний вираз для файлів SASS/SCSS
        use: [
          'style-loader', // Вставляє стилі в DOM
          'css-loader',   // Перетворює CSS в CommonJS
          'sass-loader'   // Компілює SASS/SCSS в CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон з папки src
      favicon: path.resolve(__dirname, 'src/favicon.ico'), // Абсолютний шлях до favicon
    }),
  ],
};