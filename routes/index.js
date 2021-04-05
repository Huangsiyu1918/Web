var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


let visit = "";
router.get('/last.txt', function(req, res, next)
{
  res.send(visit);
  visit = new Date().toString();
});



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


// 3-3

let time = ""
router.get('/log.html', function(req, res, next)
{
  // arr.push(Date());
  // let innerTime = "";
  // for(let i = 0; i < arr.length; i++){
  //   innerTime += String("<li>" + arr[i] + "</li>");
  // }

  time += "<li>" + Date() + "</li>";

  res.send(
    `<!DOCTYPE html>\
<html lang="en">\
<head>\
    <meta charset="UTF-8">\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <title>Document</title>\
</head>\
<body>\
<ul>${time}</ul>
</body>\
</html>`
  )
});

//3-4
var before = true;
router.get('/first.html', function(req, res, next)
{
  if(before){
    before = false;
  res.send(
    `<!DOCTYPE html>\
<html lang="en">\
<head>\
    <meta charset="UTF-8">\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <title>Document</title>\
</head>\
<body>\
    <p><a href="/main.html"> Welcome </a> </p>
</body>\
</html>`
  )}
  else
  res.redirect('main.html');
  
});

router.get('/main.html', function(req, res, next)
{
  if(before)
  {
    res.redirect('first.html');
  }
  else
  res.send(
    `<!DOCTYPE html>\
<html lang="en">\
<head>\
    <meta charset="UTF-8">\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <title>Document</title>\
</head>\
<body>\
   <h1>My main site</h1>
   <p>hello world</p>
</body>\
</html>`
  )
});

// //4-2

// let count2 = 0;
// let arr2 = ["red", "yellow", "green", "blue"]
// router.get('/color.txt', function(req, res, next)
// {
//   res.setHeader('content-Type', 'text/plain');
//   if(count2 == 4)
//   {
//     count2 = 0;
//   }

//   res.send(`${arr2[(count2 % 4)]}`);
//   count2++;
// });

// let timeStamps = [];
// router.get('/log.json', function(req, res, next)
// {
//   timeStamps.push(String(Date()));
//   res.send(JSON.stringify(timeStamps));

// });

// let d = String(Date());
// router.get('/log-ro.json', function(req, res, next)
// {
//   //timeStamps.push(d);
//   res.send((timeStamps));
// });

// router.get('/contact.ajax', function(req, res, next)
// {
//   res.send('<a href="huangsiyu1918@gmail.com">huangsiyu1918@gmail.com</a>');
// });

// router.get('/search.ajax', function(req, res, next)
// {
//   res.send('<input type="text"> <input type="button" value="Search">');
// });

// let staus = false;
// router.get('/accept', function(req, res, next)
// {
//   staus = true;
//   res.sendStatus(200);
// });

// router.get('/content.ajax', function(req, res, next)
// {
//   if(staus)
//   {
//     console.log("check again");
//     res.send('<p> This is a paragraph </p> <p> This is another paragraph </p>');
//   }
//   else
//   {
//     res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
//   }
// });

module.exports = router;