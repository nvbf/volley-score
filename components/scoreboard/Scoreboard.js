import React from 'react';
import styled from 'styled-components';
import TeamRow from './TeamRow';
import { observer, inject } from 'mobx-react';

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
