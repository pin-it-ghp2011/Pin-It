const router = require('express').Router()
const puppeteer = require('puppeteer')


const url = 'https://en.wikipedia.org/wiki/Groundhog'

const puppeteerArticle = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const url = await page.url()
  await page.goto(url, {waitUntil: 'networkidle2'})
  let title = await page.title()
  await page.waitForSelector('body')
  const body = await page.evaluate(() => document.body.innerHTML)
  await browser.close()
  const articleObj = {
    title: title,
    url: url,
    body: `${body}`
  }

  return articleObj
}

router.get('/', async (req, res, next) => {
  console.log(`we in here!!`)
  let article = await puppeteerArticle()
  res.send(article)
})

module.exports = router
