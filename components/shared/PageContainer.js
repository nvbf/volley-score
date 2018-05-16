import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #f9f8fc;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    width: 800px;
    margin: auto;
    flex-wrap: wrap;
  }
`;

export default PageContainer;
