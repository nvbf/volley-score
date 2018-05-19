import React from 'react';
import styled from 'styled-components';
import PageContainer from '../components/shared/PageContainer';
import { PreTitle, Title } from '../components/shared/Title';
import MatchId from '../components/matchId';
import Settings from '../components/settings';
import ScoreControl from '../components/scoreControl';
import Footer from '../components/footer';
import withData from '../src/apollo/withData';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
            <Footer>Laget av Thor Even Tutturen, NTNUI Volleyball</Footer>
          </PageContainer>
        );
      }}
    </Query>
  );
}

export default withData(ScorePage);
