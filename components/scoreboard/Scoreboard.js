import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import TeamRow from './TeamRow';
import color from './color';
import { animated, useTransition } from "react-spring";

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

const Container = styled(animated.div)`
  box-sizing: border-box;
  margin-top: 16px;
  width: 100%;
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

export default function Scoreboard(props) {
  const transitions = useTransition(props.isShowing, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(({ item, key, props: styleProps }) =>
    item && <animated.div key={key} style={styleProps}>
        <Container>
          <TeamRowContainer>
            <TeamRow
              name={props.homeTeam.name || '(home team)'}
              logo={props.homeTeam.logo}
              color={props.homeTeam.color}
              points={props.homeTeam.points || 0}
              sets={props.homeTeam.sets || 0}
              showLogo={props.showLogos}
              showColor={props.showColors}
              textColor={boardColors.nameText}
              showBorder
              showPrevSets={(props.homeTeam.points + props.awayTeam.points) % 2 === 0}
            />
            <TeamRow
              name={props.awayTeam.name || '(away team)'}
              logo={props.awayTeam.logo}
              color={props.awayTeam.color}
              points={props.awayTeam.points || 0}
              sets={props.awayTeam.sets || 0}
              showLogo={props.showLogos}
              showColor={props.showColors}
              textColor={boardColors.nameText}
              showPrevSets={(props.homeTeam.points + props.awayTeam.points) % 2 === 0}
            />
          </TeamRowContainer>
        </Container>

    </animated.div>
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
