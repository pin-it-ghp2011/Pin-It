// const pupperteer = require('puppeteer')

// const url = window.location.href()

// const saveButton = document.getElementsById('save-article')

// const puppeteerArticle = async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto(url, {waitUntil: 'networkidle2'})
//   let title = await await page.title()
//   await page.waitForSelector('body')
//   const body = await page.evaluate(() => document.body.innerHTML)
//   await browser.close()
//   const article = {
//     title: title,
//     url: url,
//     body: body,
//   }

//   return article
// }

// saveButton.addEventListener('click', saveIt());
