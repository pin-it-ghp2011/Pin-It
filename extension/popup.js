// const form = document.getElementById('loginform')

window.addEventListener('DOMContentLoaded', () => {
  let saveButton = document.getElementById('saveArticle')
  saveButton.addEventListener('click', e => {
    e.preventDefault()
    chrome.tabs.query({active: true, currentWindow: true}, async function(
      tabs
    ) {
      try {
        let currentUrl = tabs[0].url
        alert(currentUrl)
        let response = await fetch(
          `https://pin-it-reader.herokuapp.com/api/articles/`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              Accept:
                'application/json, application/xml, text/plain, text/html, *.*',
              'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `url=${currentUrl}`
          }
        )
        alert(response, `this is the response!`)
      } catch (error) {
        alert(error, 'banana')
      }
    })
  })
})

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

//        `https://pin-it-reader.herokuapp.com/api/${currentUrl}`,

// linh sent this
// const saveButton = document.getElementById('saveArticle')
// saveButton.addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs, sender, sendResponse) {
//     let currentUrl = tabs[0].url
//     let url = `/api/extension/`
//     fetch(url, {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
//         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
//       },
//       mode: "cors",
//       body: 'article=' + `${currentUrl}`
//     })
//       .then(response => response.json())
//       .then(response => sendResponse(response))
//       .then(function (data) {
//         alert('Request succeeded with JSON response', data);
//       })
//       .catch(function (error) {
//         alert('Request failed', error);
//       }); alert(currentUrl)    //let response = await fetch('link to the server')
//   })
// })
