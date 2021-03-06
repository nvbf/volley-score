import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { inject, observer } from 'mobx-react';
import TeamRow from './TeamRow';
import color from './color';
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
  overflow: hidden;
`;

const TeamRowContainer = styled.div`
  background: linear-gradient(${boardColors.nameTop}, ${boardColors.nameBottom});
  padding: 0px 36px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SetsContainer = styled.div`
  background: linear-gradient(${boardColors.setsTop}, ${boardColors.setsBottom});
  width: 48px;
  height: 200%;
  display: flex;
  margin-top: -48px;
  margin-left: -24px;
  transform: rotate(12deg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.darkBlue};
  font-weight: 400;
  box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.9);
  -webkit-backface-visibility: hidden;
`;

const SetScore = styled.span`
  font-size: 24px;
  height: 50px;
  line-height: 50px;
  transform: rotate(-12deg);
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
  -webkit-backface-visibility: hidden;
`;

const PointsContainer = styled.div`
  background: linear-gradient(${boardColors.pointsTop}, ${boardColors.pointsBottom});
  width: 64px;
  height: 100%;
  height: 120%;
  display: flex;
  margin-top: -8px;
  transform: rotate(12deg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-backface-visibility: hidden;
`;

const Points = styled.span`
  text-shadow: 1px 1px ${color.black};
  color: ${boardColors.points};
  font-size: 24px;
  transform: rotate(-12deg);
  height: 50px;
  line-height: 50px;
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
  -webkit-backface-visibility: hidden;
`;

const Dangle = styled.div`
  width: 8px;
  background: linear-gradient(${boardColors.nameTop}, ${boardColors.nameBottom});
  transform: rotate(12deg);
  height: 120%;
  margin-top: -4px;
  margin-left: -1px;
  -webkit-backface-visibility: hidden;
`;

export function Scoreboard(props) {
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
        <SetsContainer>
          <SetScore>{props.homeTeam.sets}</SetScore>
          <SetScore>{props.awayTeam.sets}</SetScore>
        </SetsContainer>
        <PointsContainer>
          <Points>{props.homeTeam.points}</Points>
          <Points>{props.awayTeam.points}</Points>
        </PointsContainer>
        <Dangle />
      </Container>
    </OpacityContainer>
  );
}

const TeamPoints = PropTypes.shape({
  name: PropTypes.string,
  points: PropTypes.number,
  sets: PropTypes.number,
  logo: PropTypes.string,
  color: PropTypes.string,
});

Scoreboard.propTypes = {
  homeTeam: TeamPoints,
  awayTeam: TeamPoints,
  showLogos: PropTypes.bool,
  showColors: PropTypes.bool,
  isShowing: PropTypes.bool,
};

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
  showLogos: false,
  showColors: false,
  isShowing: false,
};

export default inject((stores) => {
  const store = stores.store;
  return {
    isShowing: store.isShowing,
    showLogos: store.showLogos,
    showColors: store.showColors,
    homeTeam: store.homeTeam,
    awayTeam: store.awayTeam,
  };
})(observer(Scoreboard));
