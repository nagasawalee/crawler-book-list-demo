//mysql config
module.exports = {
  mysql: {
    base: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,//max connection
        min: 0,
        idle: 10000//10s connection timeout
      }
    },
    //dbName, root, password
    config: ['crawlerDB', 'root', '123456789']
  }

}
