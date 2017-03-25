import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 908px;
  height: 96px;
  background: #ccc;
  background: linear-gradient(rgba(240, 240, 240, 1), rgba(210, 210, 210, 1));
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Dangle = styled.div`
  height: 100%;
  background: linear-gradient(#0074D9, #001f3f);
  width: 8px;
`;

const Logo = styled.img`
  height: 72px;
  width: 96px;
`;

const Text = styled.div`
  font-size: 44px;
  color: #001f3f;
  font-weight: 400;
  width: 100%;
`;

function BigHeader(props) {
  return (
    <Container>
      <Logo src={props.logo} />
      <Text>{props.text}</Text>
      <Dangle />
    </Container>
  );
}

export default BigHeader;
