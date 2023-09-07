const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { updateScore, fetchScore } = require('./src/score/score');
const createImageFromApi = require('./src/create-png/createImageFromApi');
const createImageFromFirebase = require('./src/create-png/createImageFromFirebase');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT || 3000;

  server.get('/test', (req, res) => res.json({ message: 'testing' }));

  server.post('/api/update/:matchId', bodyParser.json(), (req, res) => {
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
      showLogos: req.body.showLogos,
      showColors: req.body.showColors,
      isShowing: req.body.isShowing,
    }).then(() => res.json({ message: 'Data received.' }));
  });

  server.get('/api/scores/:matchId', (req, res) => {
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
        showLogos: data.showLogos,
        showColors: data.showColors,
        isShowing: data.isShowing,
      }),
    );
  });

  server.get('/scoreboard/png', async (req, res, nextFunction) => {
    try {
      const { matchId } = req.query;
      if(!matchId) {
        res.status(404).send("No query param matchId provided, was not able to find your match");
        return;
      }
      await createImageFromApi(matchId);
      req.url = `/static/score/${matchId}.png`;
      nextFunction();
    } catch (err) {
      console.error(err);
      res.status(503).json({ error: JSON.stringify(err.message || err, null, 2) });
    }
  });

  server.get('/firebase/png', async (req, res, nextFunction) => {
    try {
      const { tournamentId, matchId } = req.query;
      await createImageFromFirebase({ tournamentId, matchId });
      req.url = `/static/score/firebase/${tournamentId}-${matchId}.png`;
      nextFunction();
    } catch (err) {
      console.error(err);
      res.status(503).json({ error: JSON.stringify(err.message || err, null, 2) });
    }
  });

  server.use('/static/score', express.static('static/score'));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
  });
});
