const seq = require('../connection/mysql_connect')
const { STRING } = require('../../config/db_type_config')

const BookList = seq.define('booklist', {
  title: {
    comment: 'book title',
    type: STRING,
    allowNull: false
  },
  imgUrl: {
    comment: 'book image URL',
    type: STRING,
    allowNull: false
  },
  price: {
    comment: 'book price',
    type: STRING,
    allowNull: false
  }
})

module.exports = BookList