import React from 'react';
import styled from 'styled-components';
import 'react-toggle/style.css'; // for ES6 modules
import Toggle from 'react-toggle';
import Box from '../components/Box';
import ToggleBox from '../components/ToggleBox';
import SelectBox from '../components/SelectBox';
import { Scoreboard } from '../components/scoreboard/Scoreboard';
import ControlPanel from '../components/NewControlPanel';

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

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PreTitle = styled.div`
  font-size: 18px;
  color: #a70f7f;
  font-weight: bolder;
  text-transform: uppercase;
  padding-top: 16px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 39px;
  font-weight: bold;
`;

const SectionTitle = styled.h2`
  font-size: 39px;
  width: 100%;
`;

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

const SubSectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScoreContainer = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100px;
  background-color: #d8d8d9;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

const Image = styled.img`
  height: 36px;
  width: 36px;
  min-width: 36px;
  margin-right: 16px;
`;

const ButtonContainer = styled.button`
  height: 64px;
  font-weight: bolder;
  border: none;
  color: #a70f7f;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 24px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 150px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ShitButton(props) {
  return (
    <ButtonContainer>
      <Image src={props.icon} alt={props.text} />
      {props.text}
    </ButtonContainer>
  );
}

function ScorePage() {
  return (
    <Container>
      <PreTitle>Volleystream.no</PreTitle>
      <Title>Volley Score</Title>

      <SectionTitle>Match ID</SectionTitle>
      <MatchIdContainer>
        <InputLabel>Insert match ID</InputLabel>
        <TextInput value="midtnordisk18" />
        <InputLabel>Stream overlay link</InputLabel>
        <TextInput value="http://score.volleystream.no/scoreboard?matchId=midtnordisk18" disabled />
      </MatchIdContainer>

      <SectionTitle>Settings</SectionTitle>
      <SectionContainer>
        <ToggleBox label="Show shirt colors" />
        <ToggleBox label="Show logos" />
      </SectionContainer>
      <SectionContainer>
        <SectionGroup>
          <SubSectionTitle>Home Team</SubSectionTitle>
          <SelectBox
            text="Trondheim Ballklubb"
            logo="http://volleystream.no/static/logo/tbk.svg"
            selectText="Select club"
          />
          <SelectBox text="Coral Blue" color="lightblue" selectText="Select color" />
        </SectionGroup>
        <SectionGroup>
          <SubSectionTitle>Guest Team</SubSectionTitle>
          <SelectBox
            text="Askim VBK"
            logo="http://volleystream.no/static/logo/askim.svg"
            selectText="Select club"
          />
          <SelectBox text="Crazy Yellow" color="orange" selectText="Select color" />
        </SectionGroup>
      </SectionContainer>

      <PreTitle>midtnordisk18</PreTitle>
      <Title>Scoreboard</Title>
      <SubSectionTitle>Preview</SubSectionTitle>
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
      <SubSectionTitle>Control Panel</SubSectionTitle>
      <ControlPanel
        flipped={false}
        homeTeam={{
          name: 'TBK',
          points: 16,
          sets: 1,
          logo: 'http://volleystream.no/static/logo/tbk.svg',
        }}
        guestTeam={{
          name: 'Askim',
          points: 9,
          sets: 2,
          logo: 'http://volleystream.no/static/logo/askim.svg',
        }}
      />
      <SectionContainer>
        <ShitButton icon="/static/icon/flip.svg" text="Flip teams" />
        <ShitButton icon="/static/icon/reset.svg" text="Reset points" />
      </SectionContainer>
      <Footer>Laget av Thor Even Tutturen, NTNUI Volleyball</Footer>
    </Container>
  );
}

export default ScorePage;
