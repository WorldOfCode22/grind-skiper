const
{GraphQLObjectType,
 GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name:"Asset",
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    description: {type: GraphQLString}
  }
})
