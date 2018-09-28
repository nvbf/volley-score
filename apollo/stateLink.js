import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';
import cache from './cache';

const typeDefs = `
  type Query {
    isFlipped: Boolean
  }

  type Mutation {
    flipScore: Boolean
  }
`;

const defaultState = {
  matchId: '123',
  isFlipped: false,
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
      flipScore: flipScoreResolver,
    },
  },
  defaults: defaultState,
  typeDefs,
});

export default stateLink;
