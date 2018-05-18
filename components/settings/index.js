import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToggleBox from '../shared/ToggleBox';
import { SectionTitle, SubSectionTitle } from '../shared/Title';
import SectionContainer from '../shared/SectionContainer';
import SelectBox from '../shared/SelectBox';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const GET_SETTINGS = gql`
  query GetMatchSettings($matchId: String) {
    localScoreboard(id: $matchId) {
      showLogo
      showColor
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
  mutation SetColorVisibility($id: String, $show: Boolean) {
    setColorVisibility(matchId: $id, show: $show) {
      showColors
    }
  }
`;

const SET_LOGO_VISIBILITY = gql`
  mutation SetLogoVisibility($id: String, $show: Boolean) {
    setLogoVisibility(matchId: $id, show: $show) {
      showLogos
    }
  }
`;

function Settings(props) {
  console.log(props);
  return (
    <Query query={GET_SETTINGS} variables={{ matchId: props.matchId }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return 'Error...';
        const { showColors, showLogos, homeTeam, guestTeam } = data;
        return (
          <React.Fragment>
            <SectionTitle>Settings</SectionTitle>
            <SectionContainer>
              <Mutation mutation={SET_COLOR_VISIBILITY}>
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
              </Mutation>
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
                <SubSectionTitle>Home Team</SubSectionTitle>
                <SelectBox text={homeTeam.name} logo={homeTeam.logo} selectText="Select club" />
                <SelectBox text={homeTeam.color} color={homeTeam.color} selectText="Select color" />
              </SectionGroup>
              <SectionGroup>
                <SubSectionTitle>Guest Team</SubSectionTitle>
                <SelectBox text={guestTeam.name} logo={guestTeam.logo} selectText="Select club" />
                <SelectBox
                  text={guestTeam.color}
                  color={guestTeam.color}
                  selectText="Select color"
                />
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
