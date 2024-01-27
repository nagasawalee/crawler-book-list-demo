const { startProcess } = require('../libs/utils')
const { addBooklistData } = require('../services/Booklist')
class Crawler {
  crawlerBooklistData() {
    startProcess({
      path: '../crawlers/booklist',
      async message(data) {
        //console.log(data)
        data.map(async (item, index) => {

          const result = await addBooklistData(item)

          if (result) {
            console.log('add data success');
          } else {
            console.log('add data failed');
          }
        })
      },
      async exit(code) {
        console.log(code)
      },
      async error(error) {
        console.log(error)
      }
    })
  }
}

module.exports = new Crawler()