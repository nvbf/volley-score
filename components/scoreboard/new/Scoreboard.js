import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { inject, observer } from 'mobx-react';
import TeamRow from './TeamRow';
import color from './color';
import DoubleTriangle from './svgs/DoubleTriangle';
import DoubleShadowTriangle from './svgs/DoubleShadowTriangle';
import TriangleDangle from './svgs/TriangleDangle';
import OpacityContainer from './OpacityContainer';

const boardColors = {
  nameBottom: darken(0.8, color.white),
  nameTop: darken(0.6, color.white),
  nameText: color.white,
  setsBottom: color.white,
  setsTop: color.lightGray,
  pointsBottom: color.darkBlue,
  pointsTop: color.blue,
  pointsText: color.white,
};

const Container = styled.div`
  box-sizing: content-box;
  margin-top: 16px;
  margin-left: 16px;
  width: 400px;
  height: 100px;
  color: white;
  display: flex;
  flex-direction: row;
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 5px;
`;

const TeamRowContainer = styled.div`
  background: linear-gradient(${boardColors.nameTop}, ${boardColors.nameBottom});
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SetsContainer = styled.div`
  background: linear-gradient(${boardColors.setsTop}, ${boardColors.setsBottom});
  width: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.darkBlue};
`;

const SetScore = styled.span`
  font-size: 24px;
  height: 40px;
  line-height: 40px;
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
  font-weight: 400;
`;

const PointsContainer = styled.div`
  background: linear-gradient(${boardColors.pointsTop}, ${boardColors.pointsBottom});
  width: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Points = styled.span`
  text-shadow: 1px 1px ${color.black};
  color: ${boardColors.points};
  font-size: 28px;
  height: 40px;
  line-height: 40px;
  font-weight: 400;
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
`;

export type TeamPoints = {
  name: string,
  points: number,
  sets: number,
  logo: string,
  color: string,
};

export type ScoreboardProps = {
  homeTeam: TeamPoints,
  awayTeam: TeamPoints,
  showLogos: boolean,
  showColors: boolean,
  isShowing: boolean,
};

export function Scoreboard(props: ScoreboardProps) {
  return (
    <OpacityContainer isShowing={props.isShowing}>
      <Container>
        <TeamRowContainer>
          <TeamRow
            name={props.homeTeam.name}
            logo={props.homeTeam.logo}
            color={props.homeTeam.color}
            showLogo={props.showLogos}
            showColor={props.showColors}
            textColor={boardColors.nameText}
          />
          <TeamRow
            name={props.awayTeam.name}
            logo={props.awayTeam.logo}
            color={props.awayTeam.color}
            showLogo={props.showLogos}
            showColor={props.showColors}
            textColor={boardColors.nameText}
          />
        </TeamRowContainer>
        <DoubleShadowTriangle
          leftGradient={{ start: boardColors.nameTop, stop: boardColors.nameBottom }}
          rightGradient={{ start: boardColors.setsTop, stop: boardColors.setsBottom }}
          width={30}
          height={100}
        />
        <SetsContainer>
          <SetScore>{props.homeTeam.sets}</SetScore>
          <SetScore offset>{props.awayTeam.sets}</SetScore>
        </SetsContainer>
        <DoubleTriangle
          leftGradient={{ start: boardColors.setsTop, stop: boardColors.setsBottom }}
          rightGradient={{ start: boardColors.pointsTop, stop: boardColors.pointsBottom }}
          width={30}
          height={100}
        />
        <PointsContainer>
          <Points>{props.homeTeam.points}</Points>
          <Points offset>{props.awayTeam.points}</Points>
        </PointsContainer>
        <TriangleDangle
          triangleWidth={30}
          dangleWidth={6}
          height={100}
          dangleGradient={{
            start: boardColors.nameTop,
            stop: boardColors.nameBottom,
          }}
          triangleGradient={{
            start: boardColors.pointsTop,
            stop: boardColors.pointsBottom,
          }}
        />
      </Container>
    </OpacityContainer>
  );
}

Scoreboard.defaultProps = {
  homeTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '#ffffff00',
  },
  awayTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '#ffffff00',
  },
};

export default inject((stores, props) => {
  const store = stores.store;
  return {
    isShowing: store.isShowing,
    showLogos: store.showLogos,
    showColors: store.showColors,
    homeTeam: store.homeTeam,
    awayTeam: store.awayTeam,
  };
})(observer(Scoreboard));
