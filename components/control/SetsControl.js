import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  flex-basis: 30%;
  margin-left: 8px;
  margin-right: 8px;
  box-sizing: border-box;
  height: 185px;

  @media (max-width: 500px) {
    height: 81px;
  }

  @media (max-width: 380px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const MainContainer = styled.button`
  width: 100%;
  height: 138px;
  background-color: white;
  border-radius: 4px;
  border-bottom-right-radius: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 300;
  border: none;

  @media (max-width: 720px) {
    height: 100px;
  }

  @media (max-width: 500px) {
    height: 60px;
  }

  &:hover {
    background-color: #e1eafd;
  }
`;

const Label = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  top: 6px;
  left: 6px;
  font-size: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
    font-weight: bold;
    top: 4px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    font-weight: bold;
    top: 4px;
  }
`;

const Sets = styled.div`
  font-size: 64px;
  color: #0288c7;

  @media (max-width: 800px) {
    padding-top: 8px;
    font-size: 48px;
  }

  @media (max-width: 500px) {
    padding-top: 8px;
    font-size: 36px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MinusButton = styled.button`
  background-color: #0288c7;
  border-radius: 4px;
  width: 50%;
  box-sizing: border-box;
  height: 36px;
  margin-top: 6px;
  font-size: 36px;
  color: white;
  box-sizing: border-box;
  line-height: 30px;
  cursor: pointer;
  border: none;
  margin-right: 4px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const PlusButton = styled.button`
  background-color: white;
  width: 50%;
  box-sizing: border-box;
  height: 42px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
  border: none;
  margin-left: 4px;

  ${Container}:hover & {
    background-color: #e1eafd;
  }

  ${ButtonContainer}:hover & {
    background-color: white;
  }

  &:hover {
    background-color: #e1eafd !important;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

function SetsControl(props) {
  return (
    <Container>
      <MainContainer onClick={props.onPlusClick}>
        <Label>Sets</Label>
        <Sets>{props.sets}</Sets>
      </MainContainer>
      <ButtonContainer>
        <MinusButton onClick={props.onMinusClick}>-</MinusButton>
        <PlusButton onClick={props.onPlusClick}>+</PlusButton>
      </ButtonContainer>
    </Container>
  );
}

export default SetsControl;
