import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';
import cache from './cache';

const typeDefs = `
  type Query {
    matchId: String
    isFlipped: Boolean
  }

  type Mutation {
    updateMatchId(id: String): String
    flipScore: Boolean
  }
`;

const defaultState = {
  matchId: '123',
  isFlipped: false,
};

const updateMatchIdResolver = (_, args, context) => {
  const query = gql`
    query {
      matchId @client
    }
  `;
  const previous = context.cache.readQuery({ query });
  const newData = {
    matchId: args.id,
  };
  context.cache.writeData({ data: newData });
  return newData;
};

const flipScoreResolver = (_, args, context) => {
  const query = gql`
    query {
      isFlipped @client
    }
  `;
  const previous = context.cache.readQuery({ query });
  const newData = { isFlipped: !previous.isFlipped };
  context.cache.writeData({ data: newData });
  return newData;
};

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateMatchId: updateMatchIdResolver,
      flipScore: flipScoreResolver,
    },
  },
  defaults: defaultState,
  typeDefs,
});

export default stateLink;
