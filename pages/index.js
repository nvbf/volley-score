import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PageContainer from '../components/shared/PageContainer';
import { PreTitle, Title } from '../components/shared/Title';
import MatchId from '../components/matchId';
import Settings from '../components/settings';
import ScoreControl from '../components/scoreControl';
import Foot from '../components/footer';
import withData from '../src/apollo/withData';

const GET_MATCH_ID = gql`
  query GetMatchID {
    matchId @client
  }
`;

function ScorePage() {
  return (
    <Query query={GET_MATCH_ID}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return 'Error...';
        const { matchId } = data;
        return (
          <PageContainer>
            <PreTitle>Volleystream.no</PreTitle>
            <Title>Volley Score</Title>
            <MatchId onChange={console.log} />
            <Settings matchId={matchId} />
            <ScoreControl matchId={matchId} />
            <Foot />
          </PageContainer>
        );
      }}
    </Query>
  );
}

export default withData(ScorePage);
