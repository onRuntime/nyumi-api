import { gql } from "apollo-server-core";

export default gql`
  type StatisticWalk {
    amount: Int!
    createdAt: String!
  }
  type StatisticSmoke {
    createdAt: String!
  }
  type Success {
    success: Boolean!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    firstname: String!
    createdAt: String!
  }
  input RegisterInput {
    email: String!
    password: String!
    firstname: String!
  }
  type Query {
    #User
    getCurrentUser: User

    #Statistic
    getAllSmoke: [StatisticSmoke]
    getAllWalk: [StatisticWalk]
  }
  type Mutation {
    #User
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!

    updateUser(firstname: String): User!

    recoverUser(email: String!): Success!
    updateUserPassword(
      email: String!
      code: String!
      password: String!
      confirmPassword: String!
    ): User!

    #Statistic
    addSmoke: Int!
    addWalk(amount: Int!): Int!
  }
`;
