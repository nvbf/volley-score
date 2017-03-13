const Redis = require('../cache/redis');

function updateScore(matchId, data) {
    Redis.set(`${matchId}-score-pointsA`, data.pointsA || 0);
    Redis.set(`${matchId}-score-pointsB`, data.pointsB || 0);
    Redis.set(`${matchId}-score-setA`, data.setA || 0);
    Redis.set(`${matchId}-score-setB`, data.setB || 0);
    Redis.set(`${matchId}-score-nameA`, data.nameA || 0);
    Redis.set(`${matchId}-score-nameB`, data.nameB || 0);
    Redis.set(`${matchId}-score-logoA`, data.logoA || 0);
    Redis.set(`${matchId}-score-logoB`, data.logoB || 0);
}

function fetchScore(matchId) {
  return Promise.all([
    Redis.get(`${matchId}-score-pointsA`) || 0,
    Redis.get(`${matchId}-score-pointsB`),
    Redis.get(`${matchId}-score-setA`),
    Redis.get(`${matchId}-score-setB`),
    Redis.get(`${matchId}-score-nameA`),
    Redis.get(`${matchId}-score-nameB`),
    Redis.get(`${matchId}-score-logoA`),
    Redis.get(`${matchId}-score-logoB`)
  ]).then(data => ({
      pointsA: data[0],
      pointsB: data[1],
      setA: data[2],
      setB: data[3],
      nameA: data[4],
      nameB: data[5],
      logoA: data[6],
      logoB: data[7]
  }));
}

module.exports = {
  updateScore,
  fetchScore
}
