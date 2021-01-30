var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>respond with a resource MAIN BLOG!!!!</h1>');
});

router.get('/addArticle', function(req, res, next) {
    res.send('<h1> ADD PAGErespond with a resource PAGE ADD!!!!</h1>');
  });

router.get('/editArticle', function(req, res, next) {
res.send('<h1>EDIT PAGE respond with a resource PAGE EDIT!!!!</h1>');
});

module.exports = router;