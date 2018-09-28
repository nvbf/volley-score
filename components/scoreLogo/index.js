import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  width: 207px;
  margin: 24px auto;
`;

export default function ScoreLogo() {
  return <Image src="/static/logo/score.svg" alt="Volleystream.no Score" />;
}
