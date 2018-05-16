import React from 'react';
import { Scoreboard } from '../scoreboard/Scoreboard';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100px;
  background-color: #d8d8d9;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

function scorePreview(props) {
  return (
    <ScoreContainer>
      <Scoreboard
        homeTeam={{
          name: 'TBK',
          points: 16,
          sets: 1,
          logo: 'http://volleystream.no/static/logo/tbk.svg',
          color: '#22194D',
        }}
        awayTeam={{
          name: 'Askim',
          points: 9,
          sets: 2,
          logo: 'http://volleystream.no/static/logo/askim.svg',
          color: '#22194D',
        }}
        showLogos
        showColors
        isShowing
      />
    </ScoreContainer>
  );
}

export default scorePreview;
