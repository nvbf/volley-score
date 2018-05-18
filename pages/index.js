import React from 'react';
import styled from 'styled-components';
import PageContainer from '../components/shared/PageContainer';
import { PreTitle, Title } from '../components/shared/Title';
import MatchId from '../components/matchId';
import Settings from '../components/settings';
import ScoreControl from '../components/scoreControl';
import Footer from '../components/footer';
import withData from '../src/apollo/withData';

function ScorePage() {
  return (
    <PageContainer>
      <PreTitle>Volleystream.no</PreTitle>
      <Title>Volley Score</Title>
      <MatchId onChange={console.log} />
      <Settings showColors={false} showLogos />
      <ScoreControl />
      <Footer>Laget av Thor Even Tutturen, NTNUI Volleyball</Footer>
    </PageContainer>
  );
}

export default withData(ScorePage);
