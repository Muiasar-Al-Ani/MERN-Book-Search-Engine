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
`;
// Exports the typeDefs
module.exports = typeDefs;
