import React from 'react';
import Bar from './Bar';
import Header from './Header';

class BarList extends React.Component {

  render() {
    return (
      <div>
      { this.props.team.players.map((player, index) =>
          <Bar
            key={player.num}
            animDelay={index * 60}
            number={player.num}
            name={player.name}
            position={player.position}
            active={player.num === this.props.selected}
          />
      )}
      </div>
    );
  }
}

export default BarList;
