// const form = document.getElementById('loginform')
const saveButton = document.getElementById('saveArticle')
console.log(saveButton, `i am the savebutton`)
// const name = document.getElementById('name')
// const logOut = document.getElementById('logOut')
// form.onsubmit = submit
// logOut.onclick = onLogOut

// if (JSON.parse(localStorage.getItem('user'))) {
//   form.style.display = 'none'
//   saveButton.style.display = 'block'
//   logOut.style.display = 'block'
//   name.innerHTML += JSON.parse(localStorage.getItem('user')).displayName
// }

// function onLogOut(event) {
//   event.preventDefault()
//   chrome.runtime.sendMessage({ type: logOut.id }, function (response) {
//     form.style.display = 'block'
//     saveButton.style.display = 'none'
//     logOut.style.display = 'none'
//   })
// }

// function submit(event) {
//   event.preventDefault()
//   const email = document.getElementById('email')
//   const password = document.getElementById('password')
//   chrome.runtime.sendMessage(
//     { type: form.id, email: email.value, password: password.value },
//     function (response) {
//       //user successfully logged in hide login form show article button
//       if (response === 'success') {
//         form.style.display = 'none'
//         saveButton.style.display = 'block'
//         logOut.style.display = 'block'
//       }
//     }
//   )
// }

saveButton.addEventListener('click', () => {
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   chrome.tabs.executeScript(tabs[0].id, { file: './index.js' })
  // })
  alert('Hello!')
  // chrome.tabs.getSelected(null, function (tab) {
  //   let currentTab = tab.url;
  //   alert(currentTab);
  // });

  chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
    let currentUrl = tabs[0].url
    alert(currentUrl)
    let response = await fetch('link to the server')
    // if response.status(201), then alert response has been saved
    // else, set alert that says something went wrong!

    // alexandra's example below
    //fetch(`http://pin-it-heroku.com/api/${currentTab})`
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
