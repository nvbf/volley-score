const fs = require('fs');

const repng = require('repng');
const firebase = require('firebase');

const { Scoreboard } = require('../../components/scoreboard/Scoreboard');
const { getLastName } = require('../../store/logic');

async function createImage({ tournamentId, matchId, homeColor = '', awayColor = '' }) {
  return new Promise((resolve, reject) => {
    if (!tournamentId || !matchId) {
      reject({ ok: false, error: 'No tournamentId or/and matchId info given' });
    }

    const config = {
      apiKey: 'AIzaSyAroBDj0Vw_4JdwKAWmB5Nq7ydjKq86mFM',
      authDomain: 'beachvolleyball-scoreboard.firebaseapp.com',
      databaseURL: 'https://beachvolleyball-scoreboard.firebaseio.com',
      projectId: 'beachvolleyball-scoreboard',
      storageBucket: 'beachvolleyball-scoreboard.appspot.com',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    console.log("firebase init")
    const ref = firebase.database().ref(`/tournament_matches/${tournamentId}/${matchId}`);
    ref.once('value', async (res) => {
      console.log("value")
      const match = res.val();
      if (!match) {
        reject({ ok: false, error: 'tournamentId  and matchId combo do not exist' });
        return;
      }
      const homeTeam = {
        points: match.pointsInCurrentSet[0],
        sets: match.setsWonByHomeTeam,
        logo: '',
        name: `${getLastName(match.h1Player)} / ${getLastName(match.h2Player)}`,
        color: homeColor || match.homeTeamColor || '#ff0000',
      };
      const awayTeam = {
        points: match.pointsInCurrentSet[1],
        sets: match.setsWonByAwayTeam,
        logo: '',
        name: `${getLastName(match.b1Player)} / ${getLastName(match.b2Player)}`,
        color: awayColor || match.awayTeamColor || '#00ffff',
      };

      const options = {
        width: 500,
        height: 200,
        cssLibrary: 'styled-components',
        puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
        props: {
          homeTeam,
          awayTeam,
          homeColor,
          awayColor,
          showLogos: false,
          showColors: true,
          isShowing: true,
        },
      };
      console.log("before repng")
      const stream = await repng(Scoreboard, options);
      console.log("after repng")
      const writeStream = fs.createWriteStream(
        `${__dirname}/../../static/score/firebase/${tournamentId}-${matchId}.png`,
      );
      console.log(JSON.stringify(stream, null, 2));
      stream.pipe(writeStream).on('finish', () => {
        console.log('Done');
        writeStream.end();
        stream.destroy();
        resolve({ ok: true });
      });
    });
  });
}

module.exports = createImage;
