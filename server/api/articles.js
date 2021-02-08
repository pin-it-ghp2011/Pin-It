const router = require('express').Router()
const puppeteer = require('puppeteer')

const Cloudant = require('@cloudant/cloudant')
const cloudant = new Cloudant({
  url:
    'https://apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr:cd1ac3a142202b2d9c95a0e7cfe1826b@402e34f0-2a34-4c62-8a15-f73d22bfd449-bluemix.cloudantnosqldb.appdomain.cloud',
  account: 'apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr',
  password: 'cd1ac3a142202b2d9c95a0e7cfe1826b'
})

//const url = 'https://en.wikipedia.org/wiki/Groundhog'
const puppeteerArticle = async url => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle2'})
  let title = await page.title()
  await page.waitForSelector('body')
  const body = await page.evaluate(() => document.body.innerHTML)
  await browser.close()
  const articleObj = {
    title: title,
    url: url,
    body: body
  }
  return articleObj
}

//get single article- not done-
router.get('/singleArticle', async (req, res, next) => {
  try {
    //README- need to request article for single article view
    const singleArticle = cloudant.use('pinit-test-linh').get()
    res.send(singleArticle)
  } catch (error) {
    console.log('Error in get article api', error)
    next(error)
  }
})

//add article to db from puppeteer-from addArticle thunk
router.post('/', async (req, res, next) => {
  try {
    const {url} = req.body
    const myOutputFromPuppeteer = await puppeteerArticle(url)
    cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer)

    res.send(myOutputFromPuppeteer)
  } catch (error) {
    console.log('Error in add article axios.post', error)
    next(error)
  }
})
// async function asyncCall() {
//   const myOutputFromPuppeteer = await puppeteerArticle()
//   //await cloudant.db.create('test');
//   return cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer)
// }

// asyncCall()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

module.exports = router
