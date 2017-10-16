module.exports = process.env.NODE_EVN === 'production'
    ? require('./webpack.prod.js')
    : require('./webpack.dev.js');
