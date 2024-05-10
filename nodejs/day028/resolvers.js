const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
    user: (parent, args) => {
      // Here you would typically fetch user data from a database
      // For demonstration purposes, let's return a mock user
      return {
        id: args.id,
        name: 'John Doe',
        email: 'john@example.com',
      };
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      // Here you would typically create a new user in a database
      // For demonstration purposes, let's return the created user
      return {
        id: '123',
        name: args.name,
        email: null,
      };
    },
  },
};

export default resolvers;
