const repng = require('repng');
const FakePage = require('../../components/scoreboard/FakePage');

const fs = require('fs');

const firebase = require('firebase');

const { getLastName } = require('../../store/logic');

async function createImage({ tournamentId, matchId, homeColor = '', awayColor = '' }) {
  return new Promise((resolve, reject) => {
    if (!tournamentId || !matchId) {
      reject({ ok: false, Error: 'No tournamentId or/and matchId info given' });
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
    const ref = firebase.database().ref(`/tournament_matches/${tournamentId}/${matchId}`);
    ref.once('value', (res) => {
      const match = res.val();
      console.log('match');
      console.log(match);

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

      const result = repng(FakePage, options);
      return result
        .then((stream) => {
          const writeStream = fs.createWriteStream(`${tournamentId}-${matchId}.png`);
          stream.pipe(writeStream).on('finish', () => {
            console.log('Done');
            writeStream.end();
            stream.destroy();
            resolve({ ok: true });
          });
        })
        .catch((err) => {
          console.log('ERROR');
          console.log(err);
          reject(err);
        });
    });
  });
}

createImage({ tournamentId: '938530', matchId: '2' });
