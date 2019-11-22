import { darken } from 'polished';
import React from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import color from './color';
import TeamRow from './TeamRow';

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

interface ITeamPoints {
  name: string;
  points: number;
  sets: number;
  logo: string;
  color: string;
}

interface IScoreboardProps {
  awayTeam: ITeamPoints;
  homeTeam: ITeamPoints;
  isShowing: boolean;
  showLogos: boolean;
  showColors: boolean;
}

export default function Scoreboard(props: IScoreboardProps) {
  const transitions = useTransition(props.isShowing, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props: styleProps }) =>
      item && (
        <animated.div key={key} style={styleProps}>
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
                showBorder={false}
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
      ),
  );
}

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
