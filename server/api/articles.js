const router = require('express').Router()
const puppeteer = require('puppeteer')
const Cloudant = require('@cloudant/cloudant')
require('dotenv').config()

const cloudant = new Cloudant({
  url: process.env.CLOUDANT_URL,
  account: process.env.CLOUDANT_ACCOUNT,
  password: process.env.CLOUDANT_PASSWORD
})

const url = 'https://en.wikipedia.org/wiki/Groundhog'
const puppeteerArticle = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle2'})
  let title = await page.title()
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

//add article to db from puppeteer

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
