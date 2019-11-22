import { NextPage } from 'next';
import Router from 'next/router';
import * as React from 'react';
import Foot from '../components/footer';
import MatchId from '../components/matchId';
import ScoreControl from '../components/scoreControl';
import ScoreLogo from '../components/scoreLogo';
import Settings from '../components/settings';
import PageContainer from '../components/shared/PageContainer';

interface Props {
  matchId: string;
}

const ScorePage: NextPage<Props> = ({ matchId }) => (
  <PageContainer>
    <ScoreLogo />
    <MatchId
      id={matchId}
      onChange={(id: any) => Router.replace({ pathname: '/', query: { id } })}
    />
    {matchId.length > 2 && <Settings matchId={matchId} />}
    {matchId.length > 2 && <ScoreControl matchId={matchId} />}
    <Foot />
  </PageContainer>
);

ScorePage.getInitialProps = async ({ query }) => ({
  matchId: Array.isArray(query.id) ? query.id[0] : query.id || '',
});

export default ScorePage;
