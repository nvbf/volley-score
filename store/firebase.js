import { observable, action } from 'mobx';
import firebase from 'firebase';
import {
  getHomeTeamPoints,
  getAwayTeamPoints,
  getHomeTeamSets,
  getAwayTeamSets,
  getHomeTeamColor,
  getAwayTeamColor,
  getHomeTeamLastNameString,
  getAwayTeamLastNameString,
  getLastName,
} from './logic';

class FirebaseStore {
  @observable matchId;
  @observable showColors = false;
  @observable showLogos = false;
  @observable isShowing = false;

  @observable
  homeTeam = {
    sets: 0,
    points: 0,
    name: '',
    logo: '',
    color: '#ff0000',
  };

  @observable
  awayTeam = {
    sets: 0,
    points: 0,
    name: '',
    logo: '',
    color: '#00ffff',
  };

  constructor(tournamentId, matchId) {
    this.tournamentId = tournamentId;
    this.matchId = matchId;
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
    }
  }

  @action
  stopUpdates = () => {
    // TODO: Implement firebase unsubscribe
  };

  config = {
    apiKey: 'AIzaSyAroBDj0Vw_4JdwKAWmB5Nq7ydjKq86mFM',
    authDomain: 'beachvolleyball-scoreboard.firebaseapp.com',
    databaseURL: 'https://beachvolleyball-scoreboard.firebaseio.com',
    projectId: 'beachvolleyball-scoreboard',
    storageBucket: 'beachvolleyball-scoreboard.appspot.com',
  };

  @action
  startUpdates = () => {
    const ref = firebase.database().ref(`/tournament_matches/${this.tournamentId}/${this.matchId}`);
    ref.on('value', (res) => {
      const match = res.val();
      if (!('isFinished' in match)) {
        return;
      }

      this.homeTeam = {
        points: match.pointsInCurrentSet[0],
        sets: match.setsWonByHomeTeam,
        logo: '',
        name: `${getLastName(match.h1Player)} / ${getLastName(match.h2Player)}`,
        color: match.homeTeamColor || '#ff0000',
      };
      this.awayTeam = {
        points: match.pointsInCurrentSet[1],
        sets: match.setsWonByAwayTeam,
        logo: '',
        name: `${getLastName(match.b1Player)} / ${getLastName(match.b2Player)}`,
        color: match.awayTeamColor || '#00ffff',
      };
      this.showLogos = false;
      this.showColors = true;
      this.isShowing = true;
    });
  };
}

export default FirebaseStore;
