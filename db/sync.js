//同步数据到数据库
const seq = require('./connection/mysql_connect')

require('./models')

//测试连接是否成功
seq.authenticate().then(() => {
  console.log('MySQL server connected successfully')
}).catch((error) => {
  console.log('MySQL server is failed to connect. Error info:' + error);
})

seq.sync({
  force: true
}).then(() => {
  console.log('This table has been synchronized into database');
  process.exit()
})