import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToggleBox from '../shared/ToggleBox';
import { SectionTitle, SubSectionTitle } from '../shared/Title';
import SectionContainer from '../shared/SectionContainer';
import SelectBox from '../shared/SelectBox';

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Settings(props) {
  const { showColors, showLogos, homeTeam, guestTeam } = props;
  return (
    <React.Fragment>
      <SectionTitle>Settings</SectionTitle>
      <SectionContainer>
        <ToggleBox
          onChange={val => console.log(val.target.checked)}
          checked={showColors}
          label="Show shirt colors"
        />
        <ToggleBox
          onChange={val => console.log(val.target.checked)}
          checked={showLogos}
          label="Show logos"
        />
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
          <SelectBox text={guestTeam.color} color={guestTeam.color} selectText="Select color" />
        </SectionGroup>
      </SectionContainer>
    </React.Fragment>
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
