const router = require('express').Router()
const puppeteer = require('puppeteer')

// import database stuff here

// //  trying to get the puppeteer from the backend and pass to redux
// router.get('/', async (req, res, next) => {
//   console.log('hello!')
//   try {
//     const url = 'https://en.wikipedia.org/wiki/Groundhog';
//     const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] }
//     );
//     console.log(`what's up, i'm in the try-catch block!!`)
//     const page = await browser.newPage();
//     console.log(`apples`)
//     await page.goto(url, { waitUntil: 'load', timeout: 0 });
//     console.log(`guavas`)
//     let title = await page.title();
//     console.log(title, '<--- title!')
//     await page.waitForSelector('body');
//     let body = await page.evaluate(() => document.body.innerHTML);
//     console.log(body, `<--- body!`)
//     await browser.close();
//     console.log(title, body, `bananas`);
//     const articleObj = {
//       title: JSON.stringify(title),
//       url: JSON.stringify(url),
//       body: JSON.stringify(body),
//     };

//     res.send(articleObj);
//   } catch (err) {
//     console.log(err, 'error in getting single article');
//     next(err);
//   }
// });

const puppeteerArticle = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle2'})
  let title = await (await page.title()).toString()
  console.log(title)
  await page.waitForSelector('body')
  const body = await page.evaluate(() => document.body.innerHTML)
  console.log(body)
  await browser.close()
  const articleObj = {
    title: title,
    url: url,
    body: `${body}`
  }

  //fs.writeFileSync('./result.js', body);
  return articleObj
}

router.get('/', async (req, res, next) => {
  console.log(`we in here!!`)
  let article = await puppeteerArticle()
  console.log(article, `bananas`)
})

module.exports = router

// //, { waitUntil: 'networkidle2' }
