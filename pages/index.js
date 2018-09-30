import React from 'react';
import Router from 'next/router';
import PageContainer from '../components/shared/PageContainer';
import MatchId from '../components/matchId';
import Settings from '../components/settings';
import ScoreControl from '../components/scoreControl';
import Foot from '../components/footer';
import ScoreLogo from '../components/scoreLogo';

class ScorePage extends React.Component {
  static async getInitialProps({ query }) {
    return {
      matchId: query.id || '',
    };
  }

  render() {
    const { matchId } = this.props;
    return (
      <PageContainer>
        <ScoreLogo />
        <MatchId id={matchId} onChange={id => Router.replace({ pathname: '/', query: { id } })} />
        {matchId.length > 2 && <Settings matchId={matchId} />}
        {matchId.length > 2 && <ScoreControl matchId={matchId} />}
        <Foot />
      </PageContainer>
    );
  }
}

export default ScorePage;
