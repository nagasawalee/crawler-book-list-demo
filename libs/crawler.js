const puppeteer = require('puppeteer')

module.exports = async function (option) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  url = option.url

  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  const result = await page.evaluate(option.callback)

  await browser.close()

  //crawler ends
  process.send(result)

  setTimeout(() => {
    process.exit(0)
  }, 1000)
}