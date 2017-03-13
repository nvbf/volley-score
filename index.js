var fs = require('fs');
var express = require('express');
var app = express();
var Promise = require('bluebird');
const Redis = require('./src/cache/redis');

var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

function update(pointsA = 0, pointsB = 0, setA = 0,
  setB = 0, nameA = '', nameB = '', logoA = '', logoB = '') {
  Redis.set('pointsA', pointsA);
  Redis.set('pointsB', pointsB);
  Redis.set('setA', setA);
  Redis.set('setB', setB);
  Redis.set('nameA', nameA);
  Redis.set('nameB', nameB);
  Redis.set('logoA', logoA);
  Redis.set('logoB', logoB);
}

// Init redis empty when starting server, to make redis is filled
update();

app.post('/update', jsonParser, (req, res) => {
  update(
    req.body.pointsA,
    req.body.pointsB,
    req.body.setA,
    req.body.setB,
    req.body.nameA,
    req.body.nameB,
    req.body.logoA,
    req.body.logoB
  );
  res.send('received')
})

app.get('/scores', (req, res) => {
  Promise.all([
    Redis.get('pointsA'),
    Redis.get('pointsB'),
    Redis.get('setA'),
    Redis.get('setB'),
    Redis.get('nameA'),
    Redis.get('nameB'),
    Redis.get('logoA'),
    Redis.get('logoB')
  ]).then(data => {
    res.json({
      scoreA: data[0],
      scoreB: data[1],
      setA: data[2],
      setB: data[3],
      nameA: data[4],
      nameB: data[5],
      logoA: data[6],
      logoB: data[7]
    });
  });
});

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function () {
  console.log('app listening on port ' + (process.env.PORT || 3000))
})
