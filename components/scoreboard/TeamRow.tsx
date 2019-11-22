import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  flex-direction: row;
  overflow: hidden;
`;

const LogoContainer = styled.div<{ isShowing: boolean }>`
  min-height: 57px;
  height: 57px;
  margin-right: 8px;
  background-color: #222b38;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${props => (props.isShowing ? '57' : '0')}px;
  width: ${props => (props.isShowing ? '57' : '0')}px;
  opacity: ${props => (props.isShowing ? 1 : 0)};
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
`;

const NameAndPointContainer = styled.div<{ showBorder: boolean }>`
  height: 57px;
  font-family: 'Open Sans', 'Source Sans Pro', sans-serif;
  font-size: 36px;
  color: #222b38;
  background-color: white;
  overflow: hidden;
  line-height: 55px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 32px;
  font-weight: 400;
  border-bottom: ${props => (props.showBorder ? '2px solid #222b38' : 'none')};
`;

const TeamName = styled.div`
  text-indent: 16px;
  width: 260px;
  margin-right: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 180px;
  }
`;

const TeamSets = styled.div`
  width: 45px;
  height: 45px;
  color: white;
  background-color: #222b38;
  line-height: 45px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-right: 16px;
  font-weight: 400;
`;

const TeamPoints = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  margin-right: 8px;
  margin-left: 8px;
`;

function TeamRow(props: {
  showLogo: boolean;
  showBorder: boolean;
  name: string;
  sets: number;
  points: number;
  logo: string;
}) {
  return (
    <Row>
      <LogoContainer isShowing={props.showLogo}>
        <Logo src={props.logo} />
      </LogoContainer>
      <NameAndPointContainer showBorder={props.showBorder}>
        <TeamName>{props.name}</TeamName>
        <TeamSets>{props.sets}</TeamSets>
        <TeamPoints>{props.points}</TeamPoints>
      </NameAndPointContainer>
    </Row>
  );
}

TeamRow.defaultProps = {
  logo: '',
  name: '',
  color: '',
  showLogo: false,
  showColor: false,
  showPrevSets: false,
  textColor: '#ffffff',
  sets: 0,
  points: 0,
};

export default TeamRow;
