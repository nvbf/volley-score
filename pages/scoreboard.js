import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Score from '../components/scoreboard/Scoreboard.js';

class Scoreboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matchId: props.query.matchId,
      homeTeam: {
        logo: '',
        name: '',
        color: '',
        sets: 0,
        points: 0,
      },
      awayTeam: {
        logo: '',
        color: '',
        name: '',
        sets: 0,
        points: 0,
      },
      showColors: false,
      showLogos: false,
    };
    this.update = this.update.bind(this);
  }

  static async getInitialProps(context) {
    return {
      query: context.query,
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  componentDidMount() {
    const intervalId = setInterval(this.update, 2000);
    this.setState({ intervalId });
    this.update();
  }

  update() {
    axios.get(`/api/scores/${this.state.matchId}`)
    .then(({ data })  => this.setState({
      homeTeam: {
        points: data.pointsA || 0,
        sets: data.setA || 0,
        logo: data.logoA || '',
        name: data.nameA || '',
        color: data.colorA || '',
      },
      awayTeam: {
        points: data.pointsB || 0,
        sets: data.setB || 0,
        logo: data.logoB || '',
        name: data.nameB || '',
        color: data.colorB || '',
      },
      showLogos: data.showLogos,
      showColors: data.showColors,
    }));
  }

  render() {
    const { homeTeam, awayTeam } = this.state;
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>OBS Scoreboard</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/base.css" />
        </Head>
        <Score
          homeTeam={this.state.homeTeam}
          awayTeam={this.state.awayTeam}
          showLogos={this.state.showLogos}
          showColors={this.state.showColors}
        />
      </div>
    );
  }
}

export default Scoreboard;
