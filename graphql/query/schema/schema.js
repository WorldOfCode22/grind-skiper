const { GraphQLSchema } = require('graphql');
const root = require('./root');
const mutation = require('../../mutations/mutations')

module.exports = new GraphQLSchema({
  query: root,
  mutation
});
