var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/last.txt', function(req, res, next)
{
  res.send(String(Date.now()));
});

module.exports = router;

let count = 1;
router.get('/color.html', function(req, res, next)
{
  let index = 0;
  var color = ["red", "yellow", "green", "blue"];

  index = count - 1;
  if(count == 4)
  {
    count = 0;
  }
  count++;
  let arr = color[index];

  res.send('<!DOCTYPE html> \
  <html lang="en">\
  <head>\
      <meta charset="UTF-8">\
      <meta http-equiv="X-UA-Compatible" content="IE=edge">\
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\
      <title>color_html</title>\
  </head>\
  <body>\
      <h1 style="color:'+arr+'">'+arr+'</h1>\
  </body>\
  </html>');
});

module.exports = router;

// 3-3
router.get('/log.html', function(req, res, next)
{
  // let createTime = document.createElement('p');
  // createTime.innerHTML= Date.now();
  // let innerBody = document.getElementById("body");
  // innerBody.appendChild(createTime);
  res.send('<!DOCTYPE html> \
  <html lang="en">\
  <head>\
      <meta charset="UTF-8">\
      <meta http-equiv="X-UA-Compatible" content="IE=edge">\
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\
      <title>log_html</title>\
  </head>\
  <body id="body">\
  <script>\
    let createTime = document.createElement("p");\
    createTime.innerHTML= String(Date.now());\
    let innerBody = document.getElementById("body");\
    innerBody.appendChild(createTime);\
  </script>\
    </body>\
    </html>');
});
module.exports = router;
