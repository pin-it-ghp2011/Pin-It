const router = require('express').Router()
const puppeteer = require('puppeteer')

const Cloudant = require('@cloudant/cloudant')
require('dotenv').config()
const cloudant = new Cloudant({
  url: process.env.CLOUDANT_URL,
  account: process.env.CLOUDANT_ACCOUNT,
  password: process.env.CLOUDANT_PASSWORD
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

//get single article- not done- commented out for push
router.get('/singleArticle', (req, res, next) => {
  try {
    //README- need to request article for single article view
    // const singleArticle = await cloudant.use('pinit-test-linh').get()
    // res.send(singleArticle)
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

router.post('/:url', async (req, res, next) => {
  try {
    const myOutputFromPuppeteer = await puppeteerArticle(req.params.url)
    cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer)
    //check the condition, then send 201 response, if not, then send 404
    res.sendStatus(201)
  } catch (error) {
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
