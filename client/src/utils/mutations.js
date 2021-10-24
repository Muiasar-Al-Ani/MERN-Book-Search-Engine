import gql from "graphql-tag";

// Create a GraphQL mutation query to be executed by Apollo Client and adds a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Creates a GraphQL mutation login query to be executed by Apollo Client and
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Creates a GraphQL mutation saveBook query to be executed by Apollo Client and adds a new book to the database
export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        bookId
        authors
        link
        description
        bookId
        image
        title
      }
    }
  }
`;

// Creates a GraphQL mutation removeBook query to be executed by Apollo Client and deletes a book from the database
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
