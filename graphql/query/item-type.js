const
{GraphQLObjectType,
 GraphQLString,
 GraphQLList
} = require('graphql');
const costType = require('./cost-type');

module.exports = new GraphQLObjectType({
  name: 'Item',
  fields: {
      id: {type: GraphQLString},
      cost: {type: GraphQLList(costType)},
      name: {type: GraphQLString},
      description: {type: GraphQLString}
  }
})
