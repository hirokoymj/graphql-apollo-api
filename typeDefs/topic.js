const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    topics: [Topic!]
    topicById(id: ID!): Topic!
    topicByCategory(categoryId: ID!): [Topic!]
  }

  extend type Mutation {
    createTopic(input: createTopicInput): Topic
    deleteTopic(id: ID!): Topic
    updateTopic(id: ID!, input: updateTopicInput): Topic
  }

  input createTopicInput {
    title: String!
    url: String!
    category: ID!
    subCategory: ID!
  }

  input updateTopicInput {
    title: String
    url: String
  }

  type Topic {
    id: ID!
    title: String!
    url: String!
    category: Category!
    subCategory: SubCategory!
  }
`;