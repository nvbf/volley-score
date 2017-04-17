import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import TeamRow from './TeamRow';

const Container = styled.div`
  box-sizing: content-box;
  margin-top: 16px;
  margin-left: 16px;
  padding: 6px 8px;
  width: 300px;
  height: 74px;
  border: 1px solid #111;
  border-radius: 3px;
  background-color: #666;
  color: white;
  display: flex;
  flex-direction: column;
`;

export function Scoreboard({ homeTeam, awayTeam, showLogos, showColors }) {
  return (
    <Container>
      <TeamRow {...homeTeam} showLogos={showLogos} showColor={showColors} />
      <TeamRow {...awayTeam} showLogos={showLogos} showColor={showColors} />
    </Container>
  );
}

const TeamShape = PropTypes.shape({
  name: PropTypes.string,
  points: PropTypes.number,
  sets: PropTypes.number,
  logo: PropTypes.string,
  color: PropTypes.string,
});

Scoreboard.propTypes = {
  homeTeam: TeamShape.isRequired,
  awayTeam: TeamShape.isRequired,
  showLogos: PropTypes.bool.isRequired,
  showColors: PropTypes.bool.isRequired,
};

Scoreboard.defaultProps = {
  matchId: 0,
  homeTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '',
  },
  awayTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '',
  },
};

export default inject(stores => stores.store)(observer(Scoreboard));
