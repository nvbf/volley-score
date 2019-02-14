const repng = require('repng');
const score = require('../score/score');
const scoreboard = require('./../../components/scoreboard/Scoreboard');

async function createImage(matchId) {
  const match = await score.fetchScore(matchId);
  console.log(matchId);
  console.log(match);
  const options = {
    outDir: '../../static/score',
    width: 848,
    height: 480,
    filename: `${matchId}.png`,
    css: '../../static/css/base.css',
    props: {
      match,
    },
  };

  const result = repng(scoreboard.Scoreboard, options);
  return result
    .then((a) => {
      console.log('DONE');
      console.log(a);
    })
    .catch((a) => {
      console.log('something wrong');
      console.log(a);
    });
}

createImage('test');
