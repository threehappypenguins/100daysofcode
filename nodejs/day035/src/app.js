import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

const app = express();
const PORT = process.env.PORT || 4000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

await apolloServer.start();

// Use Apollo Server as a middleware with Express
app.use('/graphql', bodyParser.json(), expressMiddleware(apolloServer));

app.get('/', (req, res) => {
  res.send('Welcome to the GraphQL API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
