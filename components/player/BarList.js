import React from 'react';
import styled from 'styled-components';
import Bar from './Bar';
import Header from './Header';

const Container = styled.div`
  width: 600px;
  min-height: 48px;
`;

class BarList extends React.Component {

  render() {
    return (
      <Container>
      { this.props.isShowing && this.props.team.players.map((player, index) =>
          <Bar
            key={player.num}
            animDelay={index * 60}
            number={player.num}
            name={player.name}
            position={player.position}
            active={index === this.props.selectedIndex}
          />
      )}
      </Container>
    );
  }
}

export default BarList;
