import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import Link from 'next/link';
import { Heading } from 'evergreen-ui';
import ToggleBox from '../shared/ToggleBox';
import SectionContainer from '../shared/SectionContainer';
import SelectBox from '../shared/SelectBox';

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const GET_SETTINGS = gql`
  query GetMatchSettings($matchId: ID!) {
    localScoreboard(id: $matchId) {
      id
      showLogos
      showColors
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
    }
  }
`;

const SET_COLOR_VISIBILITY = gql`
  mutation SetColorVisibility($id: ID!, $show: Boolean!) {
    setColorVisibility(matchId: $id, show: $show) {
      id
      showColors
    }
  }
`;

/* <Mutation mutation={SET_COLOR_VISIBILITY}>
                {setColorVisibility => (
                  <ToggleBox
                    onChange={val =>
                      setColorVisibility({
                        variables: { id: props.matchId, show: val.target.checked },
                      })
                    }
                    checked={showColors}
                    label="Show shirt colors"
                  />
                )}
                  </Mutation> */

/* <SelectBox text={homeTeam.color} color={homeTeam.color} selectText="Select color" /> */

/* <SelectBox
                  text={guestTeam.color}
                  color={guestTeam.color}
                  selectText="Select color"
                /> */

const SET_LOGO_VISIBILITY = gql`
  mutation SetLogoVisibility($id: ID!, $show: Boolean!) {
    setLogoVisibility(matchId: $id, show: $show) {
      id
      showLogos
    }
  }
`;

const SET_BOARD_VISIBILITY = gql`
  mutation SetBoardVisibility($id: ID!, $show: Boolean!) {
    setBoardVisibility(matchId: $id, show: $show) {
      id
      showBoard
    }
  }
`;

function Settings(props) {
  return (
    <Query query={GET_SETTINGS} variables={{ matchId: props.matchId }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return 'Error...';

        const { showColors, showLogos, showBoard, homeTeam, guestTeam } = data.localScoreboard;
        return (
          <React.Fragment>
            <Heading size={900} marginTop={24} marginBottom={16} marginLeft={16}>
              Settings
            </Heading>
            <SectionContainer>
              <Mutation mutation={SET_BOARD_VISIBILITY}>
                {setVisibility => (
                  <ToggleBox
                    onChange={val =>
                      setVisibility({
                        variables: { id: props.matchId, show: val.target.checked },
                      })
                    }
                    checked={showBoard}
                    label="Show board"
                  />
                )}
              </Mutation>
              {}
              <Mutation mutation={SET_LOGO_VISIBILITY}>
                {setLogoVisibility => (
                  <ToggleBox
                    onChange={val =>
                      setLogoVisibility({
                        variables: { id: props.matchId, show: val.target.checked },
                      })
                    }
                    checked={showLogos}
                    label="Show logos"
                  />
                )}
              </Mutation>
            </SectionContainer>
            <SectionContainer>
              <SectionGroup>
                <Heading size={700} marginTop={24} marginBottom={16} marginLeft={16}>
                  Home Team
                </Heading>
                <Link href={{ pathname: '/teams', query: { team: 'home', id: props.matchId } }}>
                  <SelectBox text={homeTeam.name} logo={homeTeam.logo} selectText="Select team" />
                </Link>
              </SectionGroup>
              <SectionGroup>
                <Heading size={700} marginTop={24} marginBottom={16} marginLeft={16}>
                  Guest Team
                </Heading>
                <Link href={{ pathname: '/teams', query: { team: 'guest', id: props.matchId } }}>
                  <SelectBox text={guestTeam.name} logo={guestTeam.logo} selectText="Select team" />
                </Link>
              </SectionGroup>
            </SectionContainer>
          </React.Fragment>
        );
      }}
    </Query>
  );
}

Settings.defaultProps = {
  showLogos: false,
  showColors: false,
  homeTeam: {
    name: 'Askim VBK',
    logo: 'http://volleystream.no/static/logo/askim.svg',
    color: 'orange',
  },
  guestTeam: {
    name: 'Trondheim Ballklubb',
    logo: 'http://volleystream.no/static/logo/tbk.svg',
    color: 'blue',
  },
};

const Team = PropTypes.shape({
  name: PropTypes.string,
  logo: PropTypes.string,
  color: PropTypes.string,
});

Settings.propTypes = {
  showLogos: PropTypes.bool,
  showColors: PropTypes.bool,
  homeTeam: Team,
  guestTeam: Team,
};

export default Settings;
