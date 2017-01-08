var fs = require('fs');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()


if(!process.env.OBSPLUGINPATH) {
  throw new Error(' OBSPLUGINPATH need to be defined');
}

app.post('/update', jsonParser, (req, res) => {
  fs.writeFile(process.env.OBSPLUGINPATH + '/score1.txt', req.body.pointsA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/score2.txt', req.body.pointsB);
  fs.writeFile(process.env.OBSPLUGINPATH + '/set1.txt', req.body.setA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/set2.txt', req.body.setB);
  fs.writeFile(process.env.OBSPLUGINPATH + '/name1.txt', req.body.nameA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/name2.txt', req.body.nameB);
  res.send('received')
})

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function () {
  console.log('app listening on port ' + (process.env.PORT || 3000))
})
