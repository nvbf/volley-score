import React from 'react';
import styled from 'styled-components';
import BarList from './BarList';
import BigHeader from './BigHeader';
import BigFooter from './BigFooter';
import PlayerImage from './PlayerImage';
import SmallBar from './SmallBar';

const Container = styled.div`
  width: 908px;
  height: 600px;
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

function PlayerList(props) {
  return (
    <Container>
      <BigHeader logo={props.team.logo} text={props.team.name} />
      <RowContainer>
        <BarList team={props.team} selected={10} />
        <PlayerImage
          number={2}
          name="Robin Bergheim"
          image="http://poengliga.no/img_players/61.jpg"
          delay={1000}
        />
      </RowContainer>
    </Container>
  );
}

export default PlayerList;
