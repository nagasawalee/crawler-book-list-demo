
//import Booklist Data Model
const BooklistModel = require('../db/models/booklist')
class BooklistService {
  async addBooklistData(data) {

    const id = 1
    const result = await BooklistModel.findOne({
      where: { id }
    })

    if (result) {
      return await BooklistModel.update(data, {
        where: { id }
      })
    } else {
      return await BooklistModel.create(data)
    }

  }
}

module.exports = new BooklistService()