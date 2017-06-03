const Redis = require('../cache/redis');

function updateScore(matchId, data) {
  const prefix = `${matchId}-score`;
  return Promise.all([
    Redis.set(`${prefix}-pointsA`, data.pointsA || 0),
    Redis.set(`${prefix}-pointsB`, data.pointsB || 0),
    Redis.set(`${prefix}-setA`, data.setA || 0),
    Redis.set(`${prefix}-setB`, data.setB || 0),
    Redis.set(`${prefix}-nameA`, data.nameA || ''),
    Redis.set(`${prefix}-nameB`, data.nameB || ''),
    Redis.set(`${prefix}-logoA`, data.logoA || ''),
    Redis.set(`${prefix}-logoB`, data.logoB || ''),
    Redis.set(`${prefix}-colorA`, data.colorA || ''),
    Redis.set(`${prefix}-colorB`, data.colorB || ''),
    Redis.set(`${prefix}-showLogos`, data.showLogos || false),
    Redis.set(`${prefix}-showColors`, data.showColors || false),
    Redis.set(`${prefix}-isShowing`, data.isShowing || false)
  ]);
}

function fetchScore(matchId) {
  const prefix = `${matchId}-score`;
  return Promise.all([
    Redis.get(`${prefix}-pointsA`),
    Redis.get(`${prefix}-pointsB`),
    Redis.get(`${prefix}-setA`),
    Redis.get(`${prefix}-setB`),
    Redis.get(`${prefix}-nameA`),
    Redis.get(`${prefix}-nameB`),
    Redis.get(`${prefix}-logoA`),
    Redis.get(`${prefix}-logoB`),
    Redis.get(`${prefix}-colorA`),
    Redis.get(`${prefix}-colorB`),
    Redis.get(`${prefix}-showLogos`),
    Redis.get(`${prefix}-showColors`),
    Redis.get(`${prefix}-isShowing`),
  ]).then(data => ({
      pointsA: data[0],
      pointsB: data[1],
      setA: data[2],
      setB: data[3],
      nameA: data[4],
      nameB: data[5],
      logoA: data[6],
      logoB: data[7],
      colorA: data[8],
      colorB: data[9],
      showLogos: data[10],
      showColors: data[11],
      isShowing: data[12],
  }));
}

module.exports = {
  updateScore,
  fetchScore
}
