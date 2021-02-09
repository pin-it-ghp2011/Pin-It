const router = require('express').Router()
const puppeteer = require('puppeteer')
require('dotenv').config()
const PouchDB = require('pouchdb')
const myLocalDB = new PouchDB('articles')
const remotedb = new PouchDB(`${process.env.CLOUDANT_URL}/pinit-test-linh`)

const Cloudant = require('@cloudant/cloudant')

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
    body: body,
    _id: new Date().toISOString()
  }
  return articleObj
}
//get all articles from local db
router.get('/', async (req, res, next) => {
  try {
    const allArticles = await myLocalDB.allDocs({
      include_docs: true,
      attachments: true
    })
    res.send(allArticles)
  } catch (error) {
    console.log('Error in get all articles api', error)
    next(error)
  }
})

//get single articles from local db
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const singleArticle = await myLocalDB.get({
      _id: `${id}`,
      attachments: true
    })
    res.send(singleArticle)
  } catch (error) {
    console.log('Error in get single article api', error)
    next(error)
  }
})

//add article to cloudant from puppeteer-
router.post('/', async (req, res, next) => {
  try {
    const {url} = req.body
    console.log('post route-url passed', url)
    const myOutputFromPuppeteer = await puppeteerArticle(url)
    await cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer) //cloudant
    res.send(myOutputFromPuppeteer)
  } catch (error) {
    console.log('Error in add article axios.post', error)
    next(error)
  }
})
//check to see if works with chrome extension
router.post('/extension/:url', async (req, res) => {
  try {
    const {url} = req.params
    const myOutputFromPuppeteer = await puppeteerArticle(url)
    await cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer)
    //check the condition, then send 201 response, if not, then send 404
    res.status(201).send(myOutputFromPuppeteer)
  } catch (error) {
    res.sendStatus(404)
  }
})

myLocalDB.sync(remotedb, {
  live: true,
  retry: true
})
module.exports = router

//get single article- not done- complete after all articles
//delete if added to thunk
// router.get('/singleArticle', (req, res, next) => {
//   try {
//     //README- need to request article for single article view
//     // const singleArticle = await cloudant.use('pinit-test-linh').get()
//     // res.send(singleArticle)
//   } catch (error) {
//     console.log('Error in get article api', error)
//     next(error)
//   }
// })

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
