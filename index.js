const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { db } = require('./db');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is up and running at ${url}`);
});
