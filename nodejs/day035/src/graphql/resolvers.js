const users = [];

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    user: (_, { id }) => {
      console.log("Querying user with ID:", id);
      const user = users.find(user => user.id === id);
      console.log("Found user:", user);
      return user;
    }
  },
  Mutation: {
    createUser: (_, { name }) => {
      const user = {
        id: (users.length + 1).toString(), // Convert ID to string
        name,
        email: `${name}@example.com`
      };
      users.push(user);
      console.log("Created user:", user);
      return user;
    }
  }
};

export default resolvers;
