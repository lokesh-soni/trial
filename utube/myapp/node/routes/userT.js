var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('we will, we will, rock it :)');
});

module.exports = router;
