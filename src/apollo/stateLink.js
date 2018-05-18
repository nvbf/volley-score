import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';
import cache from './cache';

const typeDefs = `
  type Query {
    matchId: String
  }

  type Mutation {
    updateMatchId(id: String): String
  }
`;

const defaultState = {
  matchId: '',
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

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateMatchId: updateMatchIdResolver,
    },
  },
  defaults: defaultState,
  typeDefs,
});

export default stateLink;
