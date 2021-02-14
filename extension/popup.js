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
        alert(`Article pinned successfully!`)
        await fetch(`https://pin-it-reader.herokuapp.com/api/articles/`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept:
              'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          body: `url=${currentUrl}`
        })
      } catch (error) {
        alert(error, 'Hmmm- try again...')
      }
    })
  })
})
