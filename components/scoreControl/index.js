import React from 'react';
import gql from 'graphql-tag';
import {
  useQuery, useMutation,
} from 'react-apollo';
import { Heading } from 'evergreen-ui';
import ScorePreview from '../scorePreview';
import { PreTitle } from '../shared/Title';
import ControlPanel from '../control/NewControlPanel';
import SectionContainer from '../shared/SectionContainer';
import IconButton from '../shared/IconButton';

const GET_TEAMS = gql`
  query GetTeams($id: ID!) {
    isFlipped @client
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
    }
  }
`;

const UPDATE_SCOREBOARD = gql`
  mutation UpdateScoreboard(
    $id: ID!
    $homeTeamPoints: Int
    $homeTeamSets: Int
    $guestTeamPoints: Int
    $guestTeamSets: Int
  ) {
    updateLocalScoreboard(
      input: {
        id: $id
        homeTeamPoints: $homeTeamPoints
        homeTeamSets: $homeTeamSets
        guestTeamPoints: $guestTeamPoints
        guestTeamSets: $guestTeamSets
      }
    ) {
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
    }
  }
`;

const FLIP_SCORE = gql`
  mutation FlipScore {
    flipScore @client
  }
`;

function ScoreControl({ matchId }) {
  const { loading, error, data } = useQuery(GET_TEAMS, { variables: { id: matchId } });
  const [updateScoreboard] = useMutation(UPDATE_SCOREBOARD);
  const [flipScore] = useMutation(FLIP_SCORE);
  if (loading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }

  const scoreData = data.localScoreboard;

  return (
    <>
      <PreTitle>{matchId}</PreTitle>
      <Heading size={900} marginTop={0} marginBottom={16}>
        Scoreboard
      </Heading>
      <Heading size={700} marginTop={8} marginBottom={16} marginLeft={16}>
        Preview
      </Heading>
      <SectionContainer>
        <ScorePreview matchId={matchId} />
      </SectionContainer>
      <SectionContainer>
        <Heading size={700} marginTop={24} marginBottom={16} marginLeft={16}>
          Control Panel
        </Heading>

        <ControlPanel
          flipped={data.isFlipped}
          {...scoreData}
          onHomeTeamPointsPlusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              homeTeamPoints: scoreData.homeTeamPoints + 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                homeTeamPoints: scoreData.homeTeamPoints + 1,
              },
            },
          })}
          onHomeTeamPointsMinusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              homeTeamPoints: scoreData.homeTeamPoints - 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                homeTeamPoints: scoreData.homeTeamPoints - 1,
              },
            },
          })}
          onGuestTeamPointsPlusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              guestTeamPoints: scoreData.guestTeamPoints + 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                guestTeamPoints: scoreData.guestTeamPoints + 1,
              },
            },
          })}
          onGuestTeamPointsMinusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              guestTeamPoints: scoreData.guestTeamPoints - 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                guestTeamPoints: scoreData.guestTeamPoints - 1,
              },
            },
          })}
          onHomeTeamSetsPlusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              homeTeamSets: scoreData.homeTeamSets + 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                homeTeamSets: scoreData.homeTeamSets + 1,
              },
            },
          })}
          onHomeTeamSetsMinusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              homeTeamSets: scoreData.homeTeamSets - 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                homeTeamSets: scoreData.homeTeamSets - 1,
              },
            },
          })}
          onGuestTeamSetsPlusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              guestTeamSets: scoreData.guestTeamSets + 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                guestTeamSets: scoreData.guestTeamSets + 1,
              },
            },
          })}
          onGuestTeamSetsMinusClick={() => updateScoreboard({
            variables: {
              id: matchId,
              guestTeamSets: scoreData.guestTeamSets - 1,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                guestTeamSets: scoreData.guestTeamSets - 1,
              },
            },
          })}
        />
      </SectionContainer>
      <SectionContainer>
        <IconButton onClick={flipScore} icon="swap-horizontal" text="Flip teams" />
        <IconButton
          icon="refresh"
          text="Reset points"
          onClick={() => updateScoreboard({
            variables: {
              id: matchId,
              homeTeamPoints: 0,
              guestTeamPoints: 0,
            },
            optimisticResponse: {
              __typename: 'Mutation',
              updateLocalScoreboard: {
                id: matchId,
                __typename: 'Scoreboard',
                homeTeamPoints: 0,
                guestTeamPoints: 0,
              },
            },
          })}
        />
      </SectionContainer>
    </>
  );
}

export default ScoreControl;
