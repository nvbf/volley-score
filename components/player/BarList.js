import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bar from './Bar';

const Container = styled.div`
  width: 600px;
  min-height: 48px;
`;

function BarList(props) {
  return (
    <Container>
      {props.isShowing &&
        props.team.players.map((player, index) => (
          <Bar
            key={player.num}
            animDelay={index * 60}
            number={player.num}
            name={player.name}
            position={player.position}
            active={index === props.selectedIndex}
          />
        ))}
    </Container>
  );
}

BarList.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  team: PropTypes.shape({
    players: PropTypes.array,
  }).isRequired,
};

export default BarList;
