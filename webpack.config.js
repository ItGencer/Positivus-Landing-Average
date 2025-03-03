const path = require('path');

module.exports = {
    mode: 'development', // або 'production'
    entry: './src/index.js', // Вхідний файл JavaScript
    output: {
        filename: 'bundle.js', // Вихідний файл JavaScript
        path: path.resolve(__dirname, 'public'), // Папка для збірки
    },
    module: {
        rules: [
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
};