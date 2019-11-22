import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo';
import Link from 'next/link';
import { Heading, Text } from 'evergreen-ui';
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

function Settings({ matchId }: { matchId: string }) {
  const { loading, error, data } = useQuery(GET_SETTINGS, {
    variables: { matchId },
  });
  const [setBoardVisibility] = useMutation(SET_BOARD_VISIBILITY);
  const [setLogoVisibility] = useMutation(SET_LOGO_VISIBILITY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;
  const {
    showLogos, showBoard, homeTeam, guestTeam,
  } = data.localScoreboard;

  return (
    <>
      <Heading size={900} marginTop={24} marginBottom={16} marginLeft={16}>
        Settings
      </Heading>
      <SectionContainer>
        <ToggleBox
          onChange={(val) => setBoardVisibility({
            variables: { id: matchId, show: val.target.checked },
          })}
          checked={showBoard}
          label="Show board"
        />
        <ToggleBox
          onChange={(val) => setLogoVisibility({
            variables: { id: matchId, show: val.target.checked },
          })}
          checked={showLogos}
          label="Show logos"
        />
      </SectionContainer>
      <SectionContainer>
        <SectionGroup>
          <Heading size={700} marginTop={24} marginBottom={16} marginLeft={16}>
            Home Team
          </Heading>
          <Link href={{ pathname: '/teams', query: { team: 'home', id: matchId } }}>
            <SelectBox text={homeTeam.name} logo={homeTeam.logo} selectText="Select team" />
          </Link>
        </SectionGroup>
        <SectionGroup>
          <Heading size={700} marginTop={24} marginBottom={16} marginLeft={16}>
            Guest Team
          </Heading>
          <Link href={{ pathname: '/teams', query: { team: 'guest', id: matchId } }}>
            <SelectBox text={guestTeam.name} logo={guestTeam.logo} selectText="Select team" />
          </Link>
        </SectionGroup>
      </SectionContainer>
    </>
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
