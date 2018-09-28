import styled from 'styled-components';
import React from 'react';
import SectionContainer from '../shared/SectionContainer';

const Footer = styled.div`
  padding-top: 64px;
  width: 100%;
  height: 150px;
  font-size: 14px;
  text-align: center;
`;

export default function Foot() {
  return (
    <SectionContainer>
      <Footer>Laget av Thor Even Tutturen, NTNUI</Footer>
    </SectionContainer>
  );
}
