import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: 138px
  height: 185px;

  @media (max-width: 500px) {
    width: 60px;
    height: 81px;
  }
`;

const MainContainer = styled.div`
  width: 138px;
  height: 138px;
  background-color: white;
  border-radius: 4px;
  border-bottom-right-radius: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 500px) {
    width: 60px;
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

  @media (max-width: 500px) {
    font-size: 10px;
    font-weight: bold;
    top: 4px;
  }
`;

const Sets = styled.div`
  font-size: 64px;
  color: #0288c7;

  @media (max-width: 500px) {
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
      <MainContainer>
        <Label>Sets</Label>
        <Sets>{props.sets}</Sets>
      </MainContainer>
      <ButtonContainer>
        <MinusButton>-</MinusButton>
        <PlusButton>+</PlusButton>
      </ButtonContainer>
    </Container>
  );
}

export default SetsControl;
