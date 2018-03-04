const
{GraphQLObjectType,
 GraphQLString,
 GraphQLInputObjectType,
 GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
  name:"Asset",
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    description: {type: GraphQLString}
  }
})

module.exports.inputType = new GraphQLInputObjectType({
  name:"Asset_Input",
  fields: {
    id: {type: GraphQLString},
    name: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: GraphQLString}
  }
})
