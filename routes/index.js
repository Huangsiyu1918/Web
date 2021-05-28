var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res, next) {
  req.pool.getConnection(function(err, connection)
  {
    if(err)
    {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    var query = "select first_name, last_name From actor;";
    connection.query(query, function(err, rows, fields)
    {
      //test
      connection.release();
      if(err)
      {
        res.sendStatus(500);
        return;
      }
      res.json(rows);
    });
  });
});
router.post('/actors', function(req, res, next) {
  req.pool.getConnection(function(err, connection){
    let cmd = `INSERT INTO actor(first_name, last_name, last_update) VALUES (?);`;
    let today = new Date();
    let day = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    let values = [req.body.first, req.body.last, day];

    connection.query(cmd, [values], function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200
      })
    });
  });
});
module.exports = router;
