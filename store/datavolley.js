import { observable, action } from 'mobx';
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

import { request } from 'graphql-request';

class DataVolleyStore {
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
    color: '#ffffff',
  };

  @observable
  awayTeam = {
    sets: 0,
    points: 0,
    name: '',
    logo: '',
    color: '#ffffff',
  };

  constructor(matchId, homeColor, awayColor) {
    this.matchId = matchId;
    this.homeColor = homeColor;
    this.awayColor = awayColor;
    this.intervalId = null;
  }

  @action
  stopUpdates = () => {
    clearInterval(this.intervalId);
  };

  @action
  startUpdates = () => {
    this.stopUpdates();
    if (!this.matchId) {
      return;
    }
    this.updateScore();
    this.intervalId = setInterval(this.updateScore, 3000);
  };

  @action
  updateScore = () => {
    const query = `
      query getLiveData($matchId: String!) {
        liveData(matchId: $matchId) {
          homeTeam {
            name
          }
          guestTeam {
            name
          }
          currentHomeTeamPoints
          currentGuestTeamPoints
          homeTeamPoints
          guestTeamPoints
          homeTeamSets
          guestTeamSets
        }
      }
    `;
    request('http://api.volleystream.no/graphql', query, {
      matchId: this.matchId,
    })
      .then(({ liveData }) => {
        console.log(this.homeColor, this.awayColor);
        this.homeTeam = {
          points: liveData.currentHomeTeamPoints,
          sets: liveData.homeTeamSets,
          logo: '',
          name: liveData.homeTeam.name,
          color: this.homeColor || liveData.homeTeamColor || '#ffffff',
        };
        this.awayTeam = {
          points: liveData.currentGuestTeamPoints,
          sets: liveData.guestTeamSets,
          logo: '',
          name: liveData.guestTeam.name,
          color: this.awayColor || liveData.awayTeamColor || '#ffffff',
        };
        this.showLogos = false;
        this.showColors = true;
        this.isShowing = true;
      })
      .catch((err) => {
        this.stopUpdates();
        this.homeTeam.name = 'Ukjent kamp.';
        this.awayTeam.name = 'Feil ID?';
        this.isShowing = true;
      });
  };
}

export default DataVolleyStore;
