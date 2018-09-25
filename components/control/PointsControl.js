import styled from 'styled-components';

const Container = styled.div`
  flex-basis: 50%;
  height: 245px;
  box-sizing: border-box;

  @media (max-width: 720px) {
    height: 245px;
  }

  @media (max-width: 500px) {
    height: 106px;
  }
`;

const MainContainer = styled.button`
  height: 191px;
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

  &:hover {
    background-color: #ffeffa;
  }

  width: 100%;

  @media (max-width: 720px) {
    height: 120px;
  }

  @media (max-width: 500px) {
    height: 83px;
  }
`;

const Label = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  top: 6px;
  left: 6px;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 10px;
    font-weight: bold;
  }
`;

const Points = styled.div`
  font-size: 112px;
  color: #000000;
  font-weight: bolder;

  @media (max-width: 720px) {
    font-size: 64px;
  }

  @media (max-width: 500px) {
    font-size: 48px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MinusButton = styled.button`
  background-color: #a70f7f;
  border-radius: 4px;
  width: 50%;
  box-sizing: border-box;
  height: 36px;
  margin-top: 6px;
  font-size: 36px;
  color: white;
  line-height: 30px;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: 4px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    font-size: 24px;
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
  border: none;
  padding: 0px;
  cursor: pointer;
  margin-left: 4px;

  ${Container}:hover & {
    background-color: #ffeffa;
  }

  ${ButtonContainer}:hover & {
    background-color: white;
  }

  &:hover {
    background-color: #ffeffa !important;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

function PointsControl(props) {
  return (
    <Container>
      <MainContainer onClick={props.onPlusClick}>
        <Label>Points</Label>
        <Points>{props.points}</Points>
      </MainContainer>
      <ButtonContainer>
        <MinusButton onClick={props.onMinusClick}>-</MinusButton>
        <PlusButton onClick={props.onPlusClick}>+</PlusButton>
      </ButtonContainer>
    </Container>
  );
}

export default PointsControl;
