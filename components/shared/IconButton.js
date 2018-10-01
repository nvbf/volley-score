import styled from 'styled-components';
import React from 'react';

const Image = styled.img`
  height: 36px;
  width: 36px;
  min-width: 36px;
  margin-right: 16px;
`;

const ButtonContainer = styled.button`
  height: 64px;
  font-weight: bolder;
  border: none;
  color: #a70f7f;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 24px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 800px) {
    margin-left: 8px;
    margin-right: 8px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 16px;
    justify-content: center;
  }
`;

function IconButton(props) {
  return (
    <ButtonContainer onClick={props.onClick}>
      <Image src={props.icon} alt={props.text} />
      {props.text}
    </ButtonContainer>
  );
}

export default IconButton;
