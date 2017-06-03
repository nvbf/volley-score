import { observable, action } from 'mobx';
import axios from 'axios';

class ScoreStore {
  @observable matchId;
  @observable showColors = true;
  @observable showLogos = true;
  @observable isShowing = true;

  @observable homeTeam = {
    sets: 2,
    points: 23,
    name: 'NTNUI',
    logo: '/static/logo/ntnui.svg',
    color: 'green',
  };

  @observable awayTeam = {
    sets: 1,
    points: 2,
    name: 'KSK',
    logo: '/static/logo/ksk.svg',
    color: 'blue',
  };

  intervalId;

  constructor(matchId) {
    this.matchId = matchId;
  }

  @action startUpdates = () => {
    this.intervalId = setInterval(this.update, 2000);
    this.update();
  };

  @action stopUpdates = () => {
    clearInterval(this.intervalId);
  };

  update = () => {
    axios.get(`/api/scores/${this.matchId}`).then(({ data }) => {
      this.homeTeam = {
        points: data.pointsA || 0,
        sets: data.setA || 0,
        logo: data.logoA || '',
        name: data.nameA || '',
        color: data.colorA || '',
      };
      this.awayTeam = {
        points: data.pointsB || 0,
        sets: data.setB || 0,
        logo: data.logoB || '',
        name: data.nameB || '',
        color: data.colorB || '',
      };
      this.showLogos = data.showLogos;
      this.showColors = data.showColors;
      this.isShowing = data.isShowing;
    });
  };
}

export default ScoreStore;
