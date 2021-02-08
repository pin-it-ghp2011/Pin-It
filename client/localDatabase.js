const PouchDB = require('pouchdb')
const find = require('pouchdb-find')
PouchDB.plugin(find)
require('dotenv').config()

const remotedb = new PouchDB(`${process.env.CLOUDANT_URL}/pinit-test-linh`)
console.log('Remote database created Successfully.')
remotedb.info().then(function(info) {
  console.log('CLOUDANT DB: ', info)
})
const localDB = new PouchDB('myLocalDB', {skip_setup: true})
// console.log('Local database created Successfully.');
localDB.sync(remotedb)

localDB.info().then(function(info) {
  console.log('LOCALDB: ', info)
})

//insert new data into localdb
localDB
  .put({
    _id: 'mydoc_5',
    title: 'Heroes2',
    url: 'testURL',
    body: 'testBody'
  })
  .then(function(response) {
    console.log(response)
  })
  .catch(function(err) {
    console.log(err)
  })

localDB.sync(remotedb)

//get info from localdb

localDB
  .allDocs({
    include_docs: true,
    attachments: true
  })
  .then(function(result) {
    console.log(result.rows[0].doc.body)
  })
  .catch(function(err) {
    console.log(err)
  })
