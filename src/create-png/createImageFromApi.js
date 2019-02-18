const repng = require('repng');
const { Scoreboard } = require('../../components/scoreboard/Scoreboard');
const axios = require('axios');
const fs = require('fs');

async function createImageFromApi(key) {
  if (!key) {
    throw new Error('No key provided');
  }

  const HOST = process.env.HOST;
  const resultAxios = await axios.get(`${HOST}/api/scores/${key}`);
  const data = resultAxios.data;

  const homeTeam = {
    points: data.pointsA || 0,
    sets: data.setA || 0,
    logo: data.logoA || '',
    name: data.nameA || '',
    color: data.colorA || '',
  };
  const awayTeam = {
    points: data.pointsB || 0,
    sets: data.setB || 0,
    logo: data.logoB || '',
    name: data.nameB || '',
    color: data.colorB || '',
  };
  const showLogos = data.showLogos;
  const showColors = data.showColors;
  const isShowing = data.isShowing;

  const options = {
    width: 500,
    height: 200,
    cssLibrary: 'styled-components',
    props: {
      homeTeam,
      awayTeam,
      showLogos,
      showColors,
      isShowing,
    },
  };

  const stream = await repng(Scoreboard, options);
  const writeStream = fs.createWriteStream(`${__dirname}/../../static/score/${key}.png`);

  return new Promise((resolve) => {
    stream.pipe(writeStream).on('finish', () => {
      console.log('Done');
      writeStream.end();
      stream.destroy();
      resolve({ ok: true });
    });
  });
}

module.exports = createImageFromApi;
// createImage('test');
