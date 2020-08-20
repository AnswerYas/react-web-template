var env = process.env.NODE_ENV || 'development'
var devConfig = require('./development.env')
var prodConfig = require('./production.env')

var config = prodConfig

if (env === 'development') {
    config = devConfig
}

module.exports = config
