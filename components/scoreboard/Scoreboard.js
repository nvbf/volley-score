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
  min-width: 400px;
  height: 116px;
  color: white;
  display: flex;
  flex-direction: row;
  font-family: 'Source Sans Pro', sans-serif;
  overflow: hidden;
`;

const TeamRowContainer = styled.div`
  display: flex;
  flex-direction: column;
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
            points={props.homeTeam.points}
            sets={props.homeTeam.sets}
            showLogo={props.showLogos}
            showColor={props.showColors}
            textColor={boardColors.nameText}
            showBorder
            showPrevSets={(props.homeTeam.points + props.awayTeam.points) % 2 === 0}
          />
          <TeamRow
            name={props.awayTeam.name}
            logo={props.awayTeam.logo}
            color={props.awayTeam.color}
            points={props.awayTeam.points}
            sets={props.awayTeam.sets}
            showLogo={props.showLogos}
            showColor={props.showColors}
            textColor={boardColors.nameText}
            showPrevSets={(props.homeTeam.points + props.awayTeam.points) % 2 === 0}
          />
        </TeamRowContainer>
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
    color: '#22194D',
  },
  awayTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '#22194D',
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

// module.exports = Scoreboard;
