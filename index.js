const express = require('express');
const { updateScore, fetchScore } = require('./src/score/score');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.post('/update/:matchId', jsonParser, (req, res) => {
  const matchId = req.params.matchId;
  if (matchId.length < 3) {
    return res
      .status(400)
      .json({ message: 'Match ID must be string with at least three characters' });
  }
  return updateScore(matchId, {
    pointsA: req.body.pointsA,
    pointsB: req.body.pointsB,
    setA: req.body.setA,
    setB: req.body.setB,
    nameA: req.body.nameA,
    nameB: req.body.nameB,
    logoA: req.body.logoA,
    logoB: req.body.logoB,
    colorA: req.body.colorA,
    colorB: req.body.colorB,
  }).then(() => res.json({ message: 'Data received.' }))
    .catch(res.status(500).json({ message: 'Error updating score.' }));
});

app.get('/scores/:matchId', (req, res) => {
  const matchId = req.params.matchId;
  if (matchId.length < 3) {
    return res
      .status(400)
      .json({ message: 'Match ID must be string with at least three characters' });
  }
  return fetchScore(matchId).then(data =>
    res.json({
      pointsA: data.pointsA,
      pointsB: data.pointsB,
      setA: data.setA,
      setB: data.setB,
      nameA: data.nameA,
      nameB: data.nameB,
      logoA: data.logoA,
      logoB: data.logoB,
      colorA: data.colorA,
      colorB: data.colorB,
    }),
  );
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`OBS Scoreboard Plugin listening on port ${process.env.PORT || 3000}`);
});
