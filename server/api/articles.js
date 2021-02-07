const router = require('express').Router()
const puppeteer = require('puppeteer')

const Cloudant = require('@cloudant/cloudant')
const cloudant = new Cloudant({
  url:
    'https://apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr:cd1ac3a142202b2d9c95a0e7cfe1826b@402e34f0-2a34-4c62-8a15-f73d22bfd449-bluemix.cloudantnosqldb.appdomain.cloud',
  account: 'apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr',
  password: 'cd1ac3a142202b2d9c95a0e7cfe1826b'
})

const url =
  'https://www.nytimes.com/2021/02/05/technology/computer-chips-government-help.html'
const puppeteerArticle = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle2'})
  let title = await (await page.title()).toString()
  // console.log(title)
  await page.waitForSelector('body')
  const body = await page.evaluate(() => document.body.innerHTML)
  // console.log(body)
  await browser.close()
  const articleObj = {
    title: title,
    url: url,
    body: `${body}`
  }
  return articleObj
}

async function asyncCall() {
  const myOutputFromPuppeteer = await puppeteerArticle()
  //await cloudant.db.create('test');
  return cloudant.use('pinit-test-linh').insert(myOutputFromPuppeteer)
}

asyncCall()
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

module.exports = router
