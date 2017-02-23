var fs = require('fs');
var express = require('express');
var app = express();
var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);

var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()


if(!process.env.OBSPLUGINPATH) {
  throw new Error('OBSPLUGINPATH needs to be defined');
}

var getPath = fileName => process.env.OBSPLUGINPATH + fileName;
var getFile = name => readFile(getPath(name), 'utf-8');

function update(pointsA = 0, pointsB = 0, setA = 0,
  setB = 0, nameA = '', nameB = '', logoA = '', logoB = '') {
  fs.writeFile(process.env.OBSPLUGINPATH + '/scoreA.txt', pointsA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/scoreB.txt', pointsB);
  fs.writeFile(process.env.OBSPLUGINPATH + '/setA.txt', setA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/setB.txt', setB);
  fs.writeFile(process.env.OBSPLUGINPATH + '/nameA.txt', nameA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/nameB.txt', nameB);
  fs.writeFile(process.env.OBSPLUGINPATH + '/logoA.txt', logoA);
  fs.writeFile(process.env.OBSPLUGINPATH + '/logoB.txt', logoB);
}

// Init files empty when starting server, to make sure files are there
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
    getFile('/scoreA.txt'),
    getFile('/scoreB.txt'),
    getFile('/setA.txt'),
    getFile('/setB.txt'),
    getFile('/nameA.txt'),
    getFile('/nameB.txt'),
    getFile('/logoA.txt'),
    getFile('/logoB.txt'),
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
