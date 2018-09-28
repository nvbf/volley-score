import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Scoreboard from '../components/scoreboard/Scoreboard';
import withData from '../apollo/withData';

const GET_SCOREBOARD = gql`
  query GetMatchSettings($matchId: ID!) {
    localScoreboard(id: $matchId) {
      id
      showLogos
      showBoard
      homeTeam {
        name
        logo
        color
      }
      guestTeam {
        name
        logo
        color
      }
      homeTeamPoints
      guestTeamPoints
      homeTeamSets
      guestTeamSets
    }
  }
`;

class ScoreboardPage extends React.Component {
  static async getInitialProps({ query }) {
    return {
      matchId: query.id,
    };
  }

  render() {
    return (
      <Query pollInterval={2000} query={GET_SCOREBOARD} variables={{ matchId: this.props.matchId }}>
        {({ loading, error, data }) => {
          if (loading) {
            return 'loading';
          }
          if (error) {
            return 'error';
          }
          const {
            homeTeam,
            guestTeam,
            homeTeamPoints,
            homeTeamSets,
            guestTeamPoints,
            guestTeamSets,
            showLogos,
            showColors,
            showBoard,
          } = data.localScoreboard;

          return (
            <Scoreboard
              homeTeam={{
                name: homeTeam.name,
                points: homeTeamPoints,
                sets: homeTeamSets,
                logo: homeTeam.logo,
                color: homeTeam.color,
              }}
              awayTeam={{
                name: guestTeam.name,
                points: guestTeamPoints,
                sets: guestTeamSets,
                logo: guestTeam.logo,
                color: guestTeam.color,
              }}
              showLogos={showLogos}
              showColors={showColors}
              isShowing={showBoard}
            />
          );
        }}
      </Query>
    );
  }
}

export default withData(ScoreboardPage);
