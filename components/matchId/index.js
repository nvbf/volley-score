import React from 'react';
import { SectionTitle } from '../shared/Title';
import styled from 'styled-components';

const MatchIdContainer = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 16px;
  box-sizing: border-box;

  @media (min-width: 800px) {
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
  }
`;

const InputLabel = styled.label`
  font-weight: bold;
  display: block;
  width: 100%;
  font-size: 20px;
  text-indent: 4px;
`;

const TextInput = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 48px;
  font-size: 24px;
  text-indent: 16px;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
  margin: 0;
  margin-bottom: 16px;

  &:disabled {
    background-color: #e9e9e9;
  }
`;

function MatchId(props) {
  return (
    <React.Fragment>
      <SectionTitle>Match ID</SectionTitle>
      <MatchIdContainer>
        <InputLabel>Insert match ID</InputLabel>
        <TextInput value="midtnordisk18" onChange={props.onChange} />
        <InputLabel>Stream overlay link</InputLabel>
        <TextInput value="http://score.volleystream.no/scoreboard?matchId=midtnordisk18" disabled />
      </MatchIdContainer>
    </React.Fragment>
  );
}

export default MatchId;
