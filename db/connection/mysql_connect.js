const Sequelize = require('sequelize')
const { mysql } = require('../../config/db_config')

const seq = new Sequelize(...mysql.config, mysql.base)

module.exports = seq