import React from 'react';
import ScorePreview from '../scorePreview';
import { PreTitle, Title, SubSectionTitle } from '../shared/Title';
import ControlPanel from '../control/NewControlPanel';
import SectionContainer from '../shared/SectionContainer';
import IconButton from '../shared/IconButton';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

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

function ScoreControl(props) {
  return (
    <Query query={GET_TEAMS} variables={{ id: props.matchId }}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'loading';
        }
        if (error) {
          return 'error';
        }

        let scoreData;
        if (loading) {
          scoreData = {
            homeTeam: {
              name: '...',
              logo: '',
            },
            guestTeam: {
              name: '...',
              logo: '',
            },
            homeTeamPoints: 0,
            guestTeamPoints: 0,
            homeTeamSets: 0,
            guestTeamSets: 0,
          };
        } else {
          scoreData = data.localScoreboard;
        }
        console.log(scoreData);

        return (
          <React.Fragment>
            <PreTitle>{props.matchId}</PreTitle>
            <Title>Scoreboard</Title>
            <SubSectionTitle>Preview</SubSectionTitle>
            <SectionContainer>
              <ScorePreview matchId={props.matchId} />
            </SectionContainer>
            <SectionContainer>
              <SubSectionTitle>Control Panel</SubSectionTitle>
              <Mutation mutation={UPDATE_SCOREBOARD}>
                {updateScoreboard => (
                  <ControlPanel
                    flipped={data.isFlipped}
                    {...scoreData}
                    onHomeTeamPointsPlusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          homeTeamPoints: scoreData.homeTeamPoints + 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            homeTeamPoints: scoreData.homeTeamPoints + 1,
                          },
                        },
                      })
                    }
                    onHomeTeamPointsMinusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          homeTeamPoints: scoreData.homeTeamPoints - 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            homeTeamPoints: scoreData.homeTeamPoints - 1,
                          },
                        },
                      })
                    }
                    onGuestTeamPointsPlusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          guestTeamPoints: scoreData.guestTeamPoints + 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            guestTeamPoints: scoreData.guestTeamPoints + 1,
                          },
                        },
                      })
                    }
                    onGuestTeamPointsMinusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          guestTeamPoints: scoreData.guestTeamPoints - 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            guestTeamPoints: scoreData.guestTeamPoints - 1,
                          },
                        },
                      })
                    }
                    onHomeTeamSetsPlusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          homeTeamSets: scoreData.homeTeamSets + 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            homeTeamSets: scoreData.homeTeamSets + 1,
                          },
                        },
                      })
                    }
                    onHomeTeamSetsMinusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          homeTeamSets: scoreData.homeTeamSets - 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            homeTeamSets: scoreData.homeTeamSets - 1,
                          },
                        },
                      })
                    }
                    onGuestTeamSetsPlusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          guestTeamSets: scoreData.guestTeamSets + 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            guestTeamSets: scoreData.guestTeamSets + 1,
                          },
                        },
                      })
                    }
                    onGuestTeamSetsMinusClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          guestTeamSets: scoreData.guestTeamSets - 1,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            guestTeamSets: scoreData.guestTeamSets - 1,
                          },
                        },
                      })
                    }
                  />
                )}
              </Mutation>
            </SectionContainer>
            <SectionContainer>
              <Mutation mutation={FLIP_SCORE}>
                {flipScore => (
                  <IconButton onClick={flipScore} icon="/static/icon/flip.svg" text="Flip teams" />
                )}
              </Mutation>
              <Mutation mutation={UPDATE_SCOREBOARD}>
                {updateScoreboard => (
                  <IconButton
                    icon="/static/icon/reset.svg"
                    text="Reset points"
                    onClick={() =>
                      updateScoreboard({
                        variables: {
                          id: props.matchId,
                          homeTeamPoints: 0,
                          guestTeamPoints: 0,
                        },
                        optimisticResponse: {
                          __typename: 'Mutation',
                          updateLocalScoreboard: {
                            id: props.matchId,
                            __typename: 'Scoreboard',
                            homeTeamPoints: 0,
                            guestTeamPoints: 0,
                          },
                        },
                      })
                    }
                  />
                )}
              </Mutation>
            </SectionContainer>
          </React.Fragment>
        );
      }}
    </Query>
  );
}

export default ScoreControl;
