import React from 'react';
import Head from 'next/head';
import axios from 'axios';

class Scoreboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matchId: props.query.matchId,
      homeTeam: {
        logo: '',
        name: '',
        sets: 0,
        points: 0,
      },
      awayTeam: {
        logo: '',
        name: '',
        sets: 0,
        points: 0,
      },
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
      },
      awayTeam: {
        points: data.pointsB || 0,
        sets: data.setB || 0,
        logo: data.logoB || '',
        name: data.nameB || '',
      },
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
          <link rel="stylesheet" href="/static/css/scoreboard.css" />
        </Head>
        <div className="score">
          <div className="team">
              { !!homeTeam.logo.length &&
                <img
                  className="teamLogo"
                  id="HomeTeamLogo"
                  alt="Home Team Logo"
                  src={`/static/logo/${homeTeam.logo}.svg`}
                />
              }
              { !homeTeam.logo.length &&
                <div className="teamLogo"></div>
              }
              <div className="teamName" id="HomeTeamName">{homeTeam.name}</div>
              <div className="teamSet" id="HomeTeamSet">{homeTeam.sets}</div>
              <div className="teamScore" id="HomeTeamScore">{homeTeam.points}</div>
          </div>
          <div className="team">
            { !!awayTeam.logo.length &&
              <img
                className="teamLogo"
                id="AwayTeamLogo"
                alt="Away Team Logo"
                src={`/static/logo/${awayTeam.logo}.svg`}
              />
            }
            { !awayTeam.logo.length &&
              <div className="teamLogo"></div>
            }
            <div className="teamName" id="AwayTeamName">{awayTeam.name}</div>
            <div className="teamSet" id="AwayTeamSet">{awayTeam.sets}</div>
            <div className="teamScore" id="AwayTeamScore">{awayTeam.points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
