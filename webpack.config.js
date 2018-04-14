// entry point -> output

const path = require('path')
console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
};