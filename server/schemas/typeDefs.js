const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Defines which fields are accessible from the Book model
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  # Defines which fields are accessible from the User model
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
`;
// Exports the typeDefs
module.exports = typeDefs;
