const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {resolve} = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: resolve(__dirname, '../../tabtracker.sqlite'),
      operatorsAliases: Op,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  }
}
