const { makeExecutableSchema, makeRemoteExecutableSchema, mergeSchemas } = require('graphql-tools');
const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const link = new HttpLink({ uri: 'http://club.volleystream.no/', fetch });

const schema = `
  type Query {
    allClubs: [Club!]!
  }

  type Club {
    name: String
    shortName: String
    logo: String
  }
`;

const remoteSchema = makeRemoteExecutableSchema({
  schema,
  link,
});

const graphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = mergeSchemas({
  schemas: [graphQLSchema, remoteSchema],
});
