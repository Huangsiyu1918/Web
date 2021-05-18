var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function(req, res, next) {
  var q = req.query.drink;
  if(q == 'tea')
  {
    res.send('A delicious cup of tea!');
  }
  else if(q == 'coffee')
  {
    res.send(418);
  }
  else
  {
    res.send(400);
  }
});

var pre = 'first';
router.post('/pass-it-on', function(req, res, next) {
  if(!req.body.message)
  {
    res.status(400).end();
  }
  else
  {
    var text = req.body.message;
    res.send(pre);
    pre = text;
  }
});


router.post('/combine', function(req, res, next) {
  // let line = req.body.line;
  // let suffix = req.query.suffix;

  let data = req.body;

  var str = '';

  for(x in data)
  {
    str += x + data.suffix + '\n';
  }
  res.send(str);
});


module.exports = router;
