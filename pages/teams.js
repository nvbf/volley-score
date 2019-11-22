import React from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Button } from 'evergreen-ui';
import Box from '../components/shared/Box';
import ToggleBox from '../components/shared/ToggleBox';

const Container = styled.div`
  background-color: #f9f8fc;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    width: 800px;
    margin: auto;
    flex-wrap: wrap;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PreTitle = styled.div`
  font-size: 18px;
  color: #525f7f;
  font-weight: bolder;
  text-transform: uppercase;
  text-indent: 16px;
  padding-top: 16px;
`;

const Title = styled.h1`
  margin: 0;
  text-indent: 16px;
  font-size: 39px;
  font-weight: bold;
  margin-bottom: 24px;
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NoPadBox = styled(Box)`
  padding-left: 0;
  padding-right: 16px;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  min-width: 48px;
  background-color: #222b38;
  padding: 7px;
`;

const Name = styled.div`
  text-indent: 16px;
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ShortName = styled.div`
  text-transform: uppercase;
  color: #525f7f;
  min-width: 120px;
  text-align: right;
`;

const GET_CLUBS = gql`
  query GetAllClubs {
    allClubs {
      name
      shortName
      logo
    }
  }
`;

function TeamBox(props) {
  return (
    <NoPadBox onClick={props.onClick}>
      <Image src={props.logo} alt={props.name} onerror="this.src='/static/logo/ntnui.svg'" />
      <Name>{props.name}</Name>
      <ShortName>{props.shortName}</ShortName>
    </NoPadBox>
  );
}

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-indent: 16px;
  margin-top: 24px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const NameInput = styled.input`
  font-size: 28px;
  box-sizing: border-box;
  margin: 4px 0 4px 16px;
  flex-grow: 1;
  min-width: 100px;

  min-height: 34px;
  padding: 6px 8px;
  line-height: 20px;
  color: #111;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
`;

function getTeamType(team) {
  if (team === 'home') {
    return 'home';
  }
  if (team === 'guest') {
    return 'guest';
  }
  return 'unkown';
}

const SET_LOGO_VISIBILITY = gql`
  mutation SetLogoVisibility($id: ID!, $show: Boolean!) {
    setLogoVisibility(matchId: $id, show: $show) {
      id
      showLogos
    }
  }
`;

const SET_HOME_TEAM_NAME_AND_LOGO = gql`
  mutation SetHomeTeamNameAndLogo($id: ID!, $name: String!, $logo: String) {
    updateLocalScoreboard(input: { id: $id, homeTeamName: $name, homeTeamLogo: $logo }) {
      id
      homeTeam {
        name
        logo
      }
    }
  }
`;

const SET_GUEST_TEAM_NAME_AND_LOGO = gql`
  mutation SetGuestTeamNameAndLogo($id: ID!, $name: String!, $logo: String) {
    updateLocalScoreboard(input: { id: $id, guestTeamName: $name, guestTeamLogo: $logo }) {
      id
      guestTeam {
        name
        logo
      }
    }
  }
`;

const GET_SCOREBOARD = gql`
  query GetMatchSettings($matchId: ID!) {
    localScoreboard(id: $matchId) {
      id
      showLogos
      showColors
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
    }
  }
`;

function getTeamMutation(team) {
  if (team === 'guest') {
    return SET_GUEST_TEAM_NAME_AND_LOGO;
  }
  return SET_HOME_TEAM_NAME_AND_LOGO;
}

class Teams extends React.Component {
  static async getInitialProps({ query }) {
    return {
      matchId: query.id,
      teamType: getTeamType(query.team),
    };
  }

  render() {
    const { matchId, teamType } = this.props;
    return (
      <Container>
        <FlexColumn>
          <PreTitle>{matchId}</PreTitle>
          <TitleRow>
            {teamType !== 'guest' && <Title>Home Team</Title>}
            {teamType === 'guest' && <Title>Guest Team</Title>}
            <Link href={{ pathname: '/', query: { id: matchId } }}>
              <Button height={36} appearance="primary" marginRight={16}>
                Done
              </Button>
            </Link>
          </TitleRow>
        </FlexColumn>

        <Query query={GET_SCOREBOARD} variables={{ matchId }}>
          {({ loading, error, data }) => {
            if (loading) { return 'Loading...'; }
            if (error) { return 'Error...'; }
            const { showLogos, homeTeam, guestTeam } = data.localScoreboard;
            const team = teamType === 'guest' ? guestTeam : homeTeam;
            return (
              <TeamContainer>
                <NoPadBox>
                  <Image src={team.logo} alt={team.name} />
                  <Mutation mutation={getTeamMutation(teamType)}>
                    {(setTeamName) => (
                      <NameInput
                        value={team.name}
                        onChange={(e) => setTeamName({
                          variables: { id: matchId, name: e.target.value },
                          optimisticResponse: {
                            __typename: 'Mutation',
                            updateLocalScoreboard: {
                              id: matchId,
                              __typename: 'Scoreboard',
                              [teamType === 'guest' ? 'guestTeam' : 'homeTeam']: {
                                __typename: 'Team',
                                name: e.target.value,
                              },
                            },
                          },
                        })}
                      />
                    )}
                  </Mutation>
                </NoPadBox>
                <Mutation mutation={SET_LOGO_VISIBILITY}>
                  {(setLogoVisibility) => (
                    <ToggleBox
                      label="Use logo"
                      checked={showLogos}
                      onChange={(e) => setLogoVisibility({
                        variables: { id: matchId, show: e.target.checked },
                      })}
                    />
                  )}
                </Mutation>
              </TeamContainer>
            );
          }}
        </Query>

        <SectionTitle>Mizunoligaen</SectionTitle>
        <TeamContainer>
          <Query query={GET_CLUBS}>
            {({ loading, error, data }) => {
              if (loading) {
                return 'loading';
              }
              if (error) {
                return 'error';
              }
              return data.allClubs.map((team) => (
                <Mutation
                  key={team.name}
                  mutation={getTeamMutation(teamType)}
                  variables={{
                    id: matchId,
                    name: team.shortName,
                    logo: team.logo,
                  }}
                >
                  {(update) => (
                    <TeamBox
                      logo={team.logo}
                      name={team.name}
                      shortName={team.shortName}
                      onClick={update}
                    />
                  )}
                </Mutation>
              ));
            }}
          </Query>
        </TeamContainer>
      </Container>
    );
  }
}

export default Teams;
