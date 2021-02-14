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
myLocalDB.sync(remotedb, {
  live: true,
  retry: true
})
//const url = 'https://en.wikipedia.org/wiki/Groundhog'
const puppeteerArticle = async url => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle2'})
  let title = await page.title()
  await page.waitForSelector('body')
  const body = await page.evaluate(() => document.body.innerHTML)
  const imageNameFromTitle = title
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, '')
    .toLowerCase()
    .concat('.png')
  await page.screenshot({path: `public/${imageNameFromTitle}`})

  const articleObj = {
    title: title,
    url: url,
    body: body,
    screenshotName: imageNameFromTitle,
    dateAdded: new Date().toDateString(),
    readingStatus: false
  }

  await browser.close()
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
    console.log('Error in get articles api', error)
    next(error)
  }
})

//add article to cloudant from puppeteer-from addArticle thunk

router.post('/', async (req, res, next) => {
  try {
    const url = req.body.url
    const tag = req.body.tag !== '' ? req.body.tag : 'Misc'
    const myOutputFromPuppeteer = await puppeteerArticle(url)
    const newArticle = {...myOutputFromPuppeteer, tag}
    await cloudant.use('pinit-test-linh').insert(newArticle)
    myLocalDB.sync(remotedb)
    res.send(myOutputFromPuppeteer)
  } catch (error) {
    console.log('Error in add article axios.post', error)
    next(error)
  }
})

router.delete('/:docId', async (req, res, next) => {
  const docId = req.params.docId
  try {
    const article = await myLocalDB.get(docId)
    myLocalDB.remove(article)
    res.send(article)
  } catch (error) {
    console.log('Error in delete articles api', error)
    next(error)
  }
})

//update readingStatus
router.put('/:docId', async (req, res, next) => {
  const docId = req.params.docId
  try {
    const article = await myLocalDB.get(docId)
    const newReadingStatus = !article.readingStatus
    myLocalDB.put({
      _id: article._id,
      _rev: article._rev,
      title: article.title,
      url: article.url,
      body: article.body,
      tag: article.tag,
      screenshotName: article.screenshotName,
      dateAdded: article.dateAdded,
      readingStatus: newReadingStatus
    })
    res.send(article)
  } catch (error) {
    console.log('Error in delete articles api', error)
    next(error)
  }
})
module.exports = router
