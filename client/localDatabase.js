const PouchDB = require('pouchdb')
const find = require('pouchdb-find')
PouchDB.plugin(find)

const remotedb = new PouchDB(
  'https://apikey-v2-r9ere7j079dc0699bhagedk73ffhpdctc2hu883edr:cd1ac3a142202b2d9c95a0e7cfe1826b@402e34f0-2a34-4c62-8a15-f73d22bfd449-bluemix.cloudantnosqldb.appdomain.cloud/pinit-test-linh'
)
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
