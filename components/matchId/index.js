import React from 'react';
import { SectionTitle } from '../shared/Title';
import styled from 'styled-components';
import TextInput from './TextInput';
import Container from './Container';
import InputLabel from './InputLabel';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const GET_MATCH_ID = gql`
  query GetMatchID {
    matchId @client
  }
`;

const SET_MATCH_ID = gql`
  mutation SetMatchId($id: String!) {
    updateMatchId(id: $id) @client
  }
`;

function MatchId(props) {
  return (
    <Query query={GET_MATCH_ID}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return 'Error...';
        return (
          <React.Fragment>
            <SectionTitle>Match ID</SectionTitle>
            <Mutation mutation={SET_MATCH_ID}>
              {setMatchId => (
                <Container>
                  <InputLabel>Insert match ID</InputLabel>
                  <TextInput
                    value={data.matchId}
                    onChange={(e) => {
                      setMatchId({ variables: { id: e.target.value } });
                    }}
                  />
                  <InputLabel>Stream overlay link</InputLabel>
                  <TextInput
                    value={`http://score.volleystream.no/scoreboard?matchId=${data.matchId}`}
                    disabled
                  />
                </Container>
              )}
            </Mutation>
          </React.Fragment>
        );
      }}
    </Query>
  );
}

export default MatchId;
