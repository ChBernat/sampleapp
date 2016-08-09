   const path = require('path');
    module.exports = {
        entry: './js/main.js',
        output: {
            path: __dirname,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname, 'js'),
                  loader: 'babel-loader' },
               { test: /\.css$/, loader: "style!css?modules" },
                { test: /\.html$/, loader: "babel!es6-template-string?context=styles" }
            ]
        }
    };