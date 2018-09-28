import styled from 'styled-components';
import React from 'react';
import SetsControl from './SetsControl';
import PointsControl from './PointsControl';

const Container = styled.div`
  width: 100%;
  height: 360px;
  background-color: #171e27;
  border-radius: 6px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: ${(props) => (props.flipped ? 'row-reverse' : 'row')};
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.45);

  @media (max-width: 720px) {
    border-radius: 0px;
    height: 300px;
  }

  @media (max-width: 500px) {
    height: 250px;
  }
`;

const TeamContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const ControlRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flipped ? 'row-reverse' : 'row')};
  align-items: flex-start;
  width: 100%;
  padding-top: 12px;
  justify-content: space-around;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  min-width: 48px;
  margin-left: 16px;
  margin-right: 16px;

  @media (max-width: 500px) {
    height: 36px;
    width: 36px;
  }
`;

const Name = styled.h2`
  color: white;
  font-weight: lighter;
  flex-grow: 1;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 36px;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

function ControlPanel(props) {
  return (
    <Container flipped={props.flipped}>
      <TeamContainer flipped={props.flipped}>
        <ControlRow flipped={props.flipped}>
          <Logo src={props.homeTeam.logo || '/static/logo/vs.svg'} alt={props.homeTeam.name} />
          <Name>{props.homeTeam.name}</Name>
        </ControlRow>
        <ControlRow flipped={props.flipped}>
          <SetsControl
            sets={props.homeTeamSets || 0}
            onPlusClick={props.onHomeTeamSetsPlusClick}
            onMinusClick={props.onHomeTeamSetsMinusClick}
          />
          <PointsControl
            points={props.homeTeamPoints || 0}
            onPlusClick={props.onHomeTeamPointsPlusClick}
            onMinusClick={props.onHomeTeamPointsMinusClick}
          />
        </ControlRow>
      </TeamContainer>
      <TeamContainer flipped={!props.flipped}>
        <ControlRow flipped={!props.flipped}>
          <Logo src={props.guestTeam.logo || '/static/logo/vs.svg'} alt={props.guestTeam.name} />
          <Name>{props.guestTeam.name}</Name>
        </ControlRow>
        <ControlRow flipped={!props.flipped}>
          <SetsControl
            sets={props.guestTeamSets || 0}
            onPlusClick={props.onGuestTeamSetsPlusClick}
            onMinusClick={props.onGuestTeamSetsMinusClick}
          />
          <PointsControl
            points={props.guestTeamPoints || 0}
            onPlusClick={props.onGuestTeamPointsPlusClick}
            onMinusClick={props.onGuestTeamPointsMinusClick}
          />
        </ControlRow>
      </TeamContainer>
    </Container>
  );
}

export default ControlPanel;
