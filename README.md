
<img align="left" alt="RM" src="https://github.com/pin-it-ghp2011/Pin-It-Final/blob/main/public/pinitLogo.png" width="50" height="50">

# Pin It  
## :sparkles: The Reader :books: for All Your On and Offline Needs :sparkles:

## :high_brightness: Introduction

If you have often found yourself bogged down with at least a hundred tabs open across ten different windows, wishing for a way to consolidate what you need in one place without blindly searching through bookmarks, Pin It is here for you. It is a web app that helps condense the sheer number of browser tabs open on your computer by giving you the option to save articles and read them later at your leisure, especially if you find yourself without internet.

## :fire: Getting Started 

Please clone this repository to your local machine and run `npm install`, then the script below will run our application at localhost:8080

```
npm run start-dev
```

### :cactus: Prerequisites

Pin It uses [CouchDB](http://couchdb.apache.org). Please install this on your local machine before running our web app!

Our chrome extension can be installed after cloning our repo by going to ``chrome://extensions/``, clicking on ``Load unpacked``, and using our ``extensions`` folder to properly pin any site you want with the click of a button.

Create a .env file with these process.env variables:

* process.env.GOOGLE_CALLBACK = '/auth/google/callback';

With your IDs and secrets:

* process.env.CLOUDANT_ID = 'Your CouchDB ID'
* process.env.CLOUDANT_SECRET = 'Your CouchDB Secret'
* process.env.COUCHDB_URL = 'Your CouchDB URL'
* process.env.GOOGLE_CLIENT_ID = 'Your Google Client ID'
* process.env.GOOGLE_CLIENT_SECRET = 'Your Google Client Secret'

## :rocket: [Deployment](https://pin-it-reader.herokuapp.com/) :rocket:

Pin It was built using [React](https://reactjs.org), [Node](https://nodejs.org/en/), [Cloudant](https://www.ibm.com/cloud/cloudant), and [PouchDb](https://pouchdb.com).

## :octocat: :octocat: Team :octocat: :octocat: 
---- 
 ### :cherry_blossom: Linh Vu
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/Vuthuylinh) 
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/linh-vu-de/)
 ### :sunflower: Heather Noto
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/heathernoto) 
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/heather-berardo-noto/)
 ### :hibiscus: Ruchi Kundu
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/ruchibrata) 
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/ruchibratakundu/)
 
 ### :blossom: Ivy Liu
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/liuivy) 
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/liu-ivy/)
 
 

