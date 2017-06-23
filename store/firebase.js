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

  intervalId;

  constructor(matchId) {
    this.matchId = matchId;
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
    }
  }

  @action
  startUpdates = () => {
    this.intervalId = setInterval(this.update, 2000);
    this.update();
  };

  @action
  stopUpdates = () => {
    clearInterval(this.intervalId);
  };

  config = {
    apiKey: 'AIzaSyAroBDj0Vw_4JdwKAWmB5Nq7ydjKq86mFM',
    authDomain: 'beachvolleyball-scoreboard.firebaseapp.com',
    databaseURL: 'https://beachvolleyball-scoreboard.firebaseio.com',
    projectId: 'beachvolleyball-scoreboard',
    storageBucket: 'beachvolleyball-scoreboard.appspot.com',
  };

  update = () => {
    const wantedMatchId = this.matchId || '0';

    firebase
      .database()
      .ref('/matches/')
      .once('value')
      .then(dataSnapshot => dataSnapshot.val())
      .then((firebaseResult) => {
        if (!(this.matchId in firebaseResult)) {
          return;
        }

        const match = JSON.parse(firebaseResult[wantedMatchId].match).MATCH;

        this.homeTeam = {
          points: getHomeTeamPoints(match),
          sets: getHomeTeamSets(match),
          logo: '',
          name: getHomeTeamLastNameString(match),
          color: getHomeTeamColor(match) || '#ff0000',
        };
        this.awayTeam = {
          points: getAwayTeamPoints(match),
          sets: getAwayTeamSets(match),
          logo: '',
          name: getAwayTeamLastNameString(match),
          color: getAwayTeamColor(match) || '#00ffff',
        };
        this.showLogos = false;
        this.showColors = true;
        this.isShowing = true;
      });
  };
}

export default FirebaseStore;
