const repng = require('repng');
const { Scoreboard } = require('../../components/scoreboard/Scoreboard');
const axios = require('axios');
const fs = require('fs');

async function createImageFromApi(key) {
  if (!key) {
    return Promise.reject('No key provided');
  }
  const HOST = process.env.HOST;

  let resultAxios;
  try {
    resultAxios = await axios.get(`${HOST}/api/scores/${key}`);
  } catch (err) {
    throw new Error(err);
  }

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
    puppeter: "{args: ['--no-sandbox', '--disable-setuid-sandbox']}",
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

  return new Promise((resolve, reject) => {
    writeStream.write(stream, (err) => {
      if(!err) {
        resolve({ ok: true });
      }
      writeStream.end();
      reject({ ok: false, error: err })
    })
  });

    
}

module.exports = createImageFromApi;
