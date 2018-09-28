import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Scoreboard from '../scoreboard/Scoreboard';

const ScoreContainer = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100px;
  background-color: #d8d8d9;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.4);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TEAMS_QUERY = gql`
  query GetTeams($id: ID!) {
    localScoreboard(id: $id) {
      id
      homeTeam {
        name
        color
        logo
      }
      guestTeam {
        name
        color
        logo
      }
      homeTeamPoints
      guestTeamPoints
      homeTeamSets
      guestTeamSets
      showLogos
      showColors
      showBoard
    }
  }
`;

function scorePreview(props) {
  return (
    <Query query={TEAMS_QUERY} variables={{ id: props.matchId }}>
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
          <ScoreContainer>
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
          </ScoreContainer>
        );
      }}
    </Query>
  );
}

export default scorePreview;
