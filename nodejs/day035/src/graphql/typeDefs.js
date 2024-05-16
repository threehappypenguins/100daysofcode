import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String
  }
`;

export default typeDefs;
