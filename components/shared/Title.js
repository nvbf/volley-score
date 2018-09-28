import styled from 'styled-components';

export const PreTitle = styled.div`
  font-size: 18px;
  color: #a70f7f;
  font-weight: bolder;
  text-transform: uppercase;
  padding-top: 36px;

  @media (max-width: 800px) {
    padding-left: 12px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 39px;
  font-weight: bold;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding-left: 12px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 39px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding-left: 12px;
  }
`;

export const SubSectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding-left: 12px;
  }
`;

export default Title;
