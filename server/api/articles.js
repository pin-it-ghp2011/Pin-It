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
    body: body
  }
  return articleObj
}

router.get('/', async (req, res, next) => {
  try {
    const allArticles = await myLocalDB.allDocs({
      include_docs: true,
      attachments: true
    })
    res.send(allArticles)
  } catch (error) {
    console.log('Error in get aa articles api', error)
    next(error)
  }
})

//get singleArticle from myLocalDB

router.get('/:docId', async (req, res, next) => {
  const docId = req.params.docId

  try {
    const article = await myLocalDB.get(docId)
    res.send(article)
  } catch (error) {
    console.log('Error in get aa articles api', error)
    next(error)
  }
})

//add article to cloudant from puppeteer-from addArticle thunk
router.post('/', async (req, res, next) => {
  try {
    const {url} = req.body
    console.log('post route-url passed', url)
    const myOutputFromPuppeteer = await puppeteerArticle(url)
    await cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer) //cloudant
    myLocalDB.sync(remotedb)
    res.send(myOutputFromPuppeteer)
  } catch (error) {
    console.log('Error in add article axios.post', error)
    next(error)
  }
})

myLocalDB.sync(remotedb, {
  live: true,
  retry: true
})
module.exports = router
