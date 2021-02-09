// const form = document.getElementById('loginform')

window.addEventListener('load', () => {
  const saveButton = document.getElementById('saveArticle')

  saveButton.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, async function(
      tabs
    ) {
      let currentUrl = tabs[0].url
      alert(currentUrl)
      let response = await fetch(
        `https://pin-it-reader.herokuapp.com/api/${currentUrl}`,
        {
          method: 'POST'
        }
      )
      alert('banana')
      if (response.status(201)) {
        alert('Your article is saved!')
      } else {
        alert(`Something went wrong!`)
      }
    })
  })
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
