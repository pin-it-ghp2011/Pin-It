// const form = document.getElementById('loginform')
const saveButton = document.getElementById('saveArticle')
console.log(saveButton, `i am the savebutton`)

saveButton.addEventListener('click', () => {
  alert('Hello!')

  chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
    let currentUrl = tabs[0].url
    alert(currentUrl)
    let response = await fetch('link to the server')
  })

  alert('Your article is saved!')
})

// const pupperteer = require("puppeteer")

// const url = window.location.href()

// const saveButton = document.getElementsById("save-article")

// const puppeteerArticle = async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto(url, {waitUntil: "networkidle2"})
//   let title = await await page.title()
//   await page.waitForSelector("body")
//   const body = await page.evaluate(() => document.body.innerHTML)
//   await browser.close()
//   const article = {
//     title: title,
//     url: url,
//     body: body,
//   }

//   return article
// }

// saveButton.addEventListener("click", saveIt());
