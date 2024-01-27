const crawler = require('../libs/crawler')

crawler({
  url: 'https://books.toscrape.com/',
  callback() {
    //initialize data array 
    let data = []
    //change query statement according to the webpage structure
    //get all book container
    let elements = [...document.querySelectorAll('.product_pod')]
    elements.map((item) => {
      let title = item.querySelector('h3').children[0].title //get book name
      let imgUrl = item.querySelector('.image_container .thumbnail').src //get cover img url
      let price = item.querySelector('.price_color').innerHTML//get price
      data.push({ title, imgUrl, price })
    })

    return data;
  }
})