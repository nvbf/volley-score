import styled from 'styled-components';

const Box = styled.div`
  background-color: #ffffff;
  border-top: 1px solid #e9e9e9;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bolder;
  font-size: 18px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active: {
    opacity: 1;
  }

  @media (min-width: 800px) {
    width: 392px;
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    border-bottom: ${props => (props.noMargin ? 0 : 1)}px solid #e9e9e9;
    margin-bottom: ${props => (props.noMargin ? 0 : 8)}px;
  }

  &:last-child {
    border-bottom: 1px solid #e9e9e9;
  }
`;

export default Box;

export const LabelBox = Box.withComponent('label');
