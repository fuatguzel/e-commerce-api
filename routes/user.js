const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
  res.send('Success')
  next()
})

module.exports = router