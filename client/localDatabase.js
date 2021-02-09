const PouchDB = require('pouchdb')
const find = require('pouchdb-find')
PouchDB.plugin(find)
require('dotenv').config() //.env
class LocalDB {
  constructor(name) {
    const remotedb = new PouchDB(`${process.env.CLOUDANT_URL}/${name}`)
    // console.log('Remote database created Successfully.');
    this.localDB = new PouchDB(name, {skip_setup: true})
    //console.log('Local database created Successfully.');
    this.localDB.sync(remotedb, {
      //https://pouchdb.com/api.html#replication
      live: true,
      retry: true
    })
  }

  createDBIndex() {
    this.localDB.createIndex({index: {fields: ['userKey', '_id']}})
  }
  findArticle(userId) {
    return this.localDB
      .find({selector: {userKey: {$eq: userId}}})
      .then(function(result, err) {
        if (!err) {
          console.log('Successfully found articles by user', result)
          return result
        } else {
          console.log('Error finding articles by user', err)
        }
      })
  }
  deleteArticle(article) {
    this.localDB.remove(article)
  }
}

module.exports = LocalDB
