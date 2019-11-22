import * as React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import PageContainer from '../components/shared/PageContainer';
import MatchId from '../components/matchId';
import Settings from '../components/settings';
import ScoreControl from '../components/scoreControl';
import Foot from '../components/footer';
import ScoreLogo from '../components/scoreLogo';

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
