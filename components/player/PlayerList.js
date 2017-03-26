import React from 'react';
import styled from 'styled-components';
import BarList from './BarList';
import BigHeader from './BigHeader';
import BigFooter from './BigFooter';
import PlayerImage from './PlayerImage';
import SmallBar from './SmallBar';

const Container = styled.div`
  width: 908px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-directon: row;
  align-items: space-between;
  justify-content: space-between;
`;

class PlayerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      intervalId: 0,
      showImage: false,
      showList: false,
      showHeader: true,
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.startUpdate = this.startUpdate.bind(this);

  }

  updateSelected() {
    const newIndex = this.state.selectedIndex + 1;
    if (newIndex === (this.props.team.players.length)) {
      clearInterval(this.state.intervalId);
      this.setState({
        showImage: false,
        showList: false,
        showHeader: false,
      });
    } else {
      this.setState({
        selectedIndex: newIndex,
        showImage: true,
      });
    }
  }

  startUpdate() {
    const intervalId = setInterval(this.updateSelected, 2000);
    this.setState({ intervalId, showList: true });
  }

  componentDidMount() {
    setTimeout(this.startUpdate, 600);
  }

  render() {
    const selectedPlayer = this.props.team.players[Math.max(this.state.selectedIndex, 0)];
    const prevPlayer = this.props.team.players[Math.max(0, this.state.selectedIndex - 1)];

    const { team } = this.props;
    return (
      <Container>
        <BigHeader
          logo={team.logo}
          text={team.name}
          isShowing={this.state.showHeader}
        />
        <RowContainer>
          <BarList
            team={team}
            selectedIndex={this.state.selectedIndex}
            isShowing={this.state.showList}
          />
          <PlayerImage
            player={selectedPlayer}
            prevPlayer={prevPlayer}
            isShowing={this.state.showImage}
          />
        </RowContainer>
      </Container>
    );
  }

}

export default PlayerList;
