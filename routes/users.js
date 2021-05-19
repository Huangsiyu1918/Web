var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var arr = [];
var i = 0;
router.post('/addpost', function(req, res, next) {
  let data = req.body;
  arr[i++] = data;
  res.send();
});

router.get('/getposts', function(req, res, next) {
  var temp = Array.from(arr);
  temp = temp.reverse();
  res.send(temp);
});
module.exports = router;
