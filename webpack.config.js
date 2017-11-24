const path = require('path');

module.exports = {

    entry: './src/js/vibrance-framework.js',
    output: {
        path: path.resolve('./dist/js'),
        filename: 'vibrance-framework.js'
    }

}