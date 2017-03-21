import React from 'react';
import styled from 'styled-components';
import TeamRow from './TeamRow';

function Scoreboard({ homeTeam, awayTeam, showLogos, showColors }) {
  const Container = styled.div`
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

  return (
    <Container>
      <TeamRow {...homeTeam} showLogo={showLogos} showColor={showColors} />
      <TeamRow {...awayTeam} showLogo={showLogos} showColor={showColors} />
    </Container>
  );
}

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

export default Scoreboard;
