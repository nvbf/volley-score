import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  height: 48px;
  background: #ccc;
  color: #001f3f;
  background: linear-gradient(#fff, #aaa);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  border-bottom: 1px solid #001f3f;
`;

const Logo = styled.img`
  height: 36px;
  width: 72px;
`;

const Text = styled.div`
  font-size: 36px;
  margin-left: 16px;
  color: #001f3f;
`;

function Header(props) {
  return (
    <Container>
      <Logo src={props.logo} />
      <Text>{props.text}</Text>
    </Container>
  );
}

export default Header;
