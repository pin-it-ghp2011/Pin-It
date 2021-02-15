const router = require('express').Router()
module.exports = router
router.use('/articles', require('./articles'))
router.use('/users', require('./users'))
router.use((req, res, next) => {
  const error = new Error('Do we get another error message?')
  error.status = 404
  next(error)
})
