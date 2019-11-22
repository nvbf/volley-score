import styled from 'styled-components';

const MatchIdContainer = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
  }
`;

export default MatchIdContainer;
