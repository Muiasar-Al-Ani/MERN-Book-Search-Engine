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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }

  input SavedBookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
`;
// Exports the typeDefs
module.exports = typeDefs;
