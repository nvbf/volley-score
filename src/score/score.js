const Redis = require('../cache/redis');

function updateScore(matchId, data) {
  const prefix = `${matchId}-score`;
  return Promise.all([
    Redis.set(`${prefix}-pointsA`, data.pointsA || 0),
    Redis.set(`${prefix}-pointsB`, data.pointsB || 0),
    Redis.set(`${prefix}-setA`, data.setA || 0),
    Redis.set(`${prefix}-setB`, data.setB || 0),
    Redis.set(`${prefix}-nameA`, data.nameA || 0),
    Redis.set(`${prefix}-nameB`, data.nameB || 0),
    Redis.set(`${prefix}-logoA`, data.logoA || 0),
    Redis.set(`${prefix}-logoB`, data.logoB || 0),
    Redis.set(`${prefix}-showLogos`, data.showLogos || false),
    Redis.set(`${prefix}-showColors`, data.showColors || false)
  ]);
}

function fetchScore(matchId) {
  const prefix = `${matchId}-score`;
  return Promise.all([
    Redis.get(`${prefix}-pointsA`) || 0,
    Redis.get(`${prefix}-pointsB`),
    Redis.get(`${prefix}-setA`),
    Redis.get(`${prefix}-setB`),
    Redis.get(`${prefix}-nameA`),
    Redis.get(`${prefix}-nameB`),
    Redis.get(`${prefix}-logoA`),
    Redis.get(`${prefix}-logoB`),
    Redis.get(`${prefix}-showLogos`),
    Redis.get(`${prefix}-showColors`),
  ]).then(data => ({
      pointsA: data[0],
      pointsB: data[1],
      setA: data[2],
      setB: data[3],
      nameA: data[4],
      nameB: data[5],
      logoA: data[6],
      logoB: data[7],
      showLogos: data[8],
      showColors: data[9],
  }));
}

module.exports = {
  updateScore,
  fetchScore
}
