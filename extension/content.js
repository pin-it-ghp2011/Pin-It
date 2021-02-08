const Cloudant = require('@cloudant/cloudant')
const firebase = require('firebase')
const cloudant = new Cloudant({
  url:
    'https://apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr:cd1ac3a142202b2d9c95a0e7cfe1826b@402e34f0-2a34-4c62-8a15-f73d22bfd449-bluemix.cloudantnosqldb.appdomain.cloud',
  account: 'apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr',
  password: 'cd1ac3a142202b2d9c95a0e7cfe1826b'
})

firebase.initializeApp({
  apiKey: 'AIzaSyDnTBGPTFHhQ9GFsd3MoypwJ0MBXNH7mO4',
  authDomain: 'readme-fa514.firebaseapp.com',
  databaseURL: 'https://readme-fa514.firebaseio.com',
  projectId: 'readme-fa514',
  storageBucket: 'readme-fa514.appspot.com',
  messagingSenderId: '706457283243',
  appId: '1:706457283243:web:d6341c27b1c7200a14e5ee',
  measurementId: 'G-VPC7CW19V8'
})

const database = firebase.firestore()

async function login(email, password) {
  try {
    const login = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    localStorage.setItem('user', JSON.stringify(login.user))
    return 'success'
  } catch (error) {
    console.log(error)
    return 'unsuccessful'
  }
}
const articleUrl = {url: window.location}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'loginForm') {
    //login
    login(request.email, request.password).then(info => sendResponse(info))
    return true
  } else if (request.type === 'logOut') {
    //logout
    firebase.auth().signOut()
    user = 'loggedOut'
    localStorage.removeItem('user')
  } else {
    const currUser = JSON.parse(localStorage.getItem('user'))
    const url = sender.tab.url.split('/').join('')
    const usersRef = database.collection('users').doc(currUser.email)
    const articlesRef = cloudant.use('articles').doc(url)

    articlesRef.get().then(function(articleUrl) {
      const puppeteerArticle = async url => {
        const browser = await puppeteer.launch({args: ['--no-sandbox']})
        const page = await browser.newPage()
        await page.goto(url, {waitUntil: 'networkidle2'})
        let title = await page.title()
        await page.waitForSelector('body')
        const body = await page.evaluate(() => document.body.innerHTML)
        await browser.close()
        const articleObj = {
          title: title,
          url: url,
          body: body
        }
        return articleObj
      }
    })
  }
})
