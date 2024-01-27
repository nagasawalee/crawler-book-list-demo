const router = require('koa-router')()
const crawlerController = require('../controllers/Crawler')
//add prefix
router.prefix('/crawler')

//add child crawler process router
router.get('/crawl_booklist_data', crawlerController.crawlerBooklistData)

module.exports = router
