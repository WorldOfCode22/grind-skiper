const
{GraphQLObjectType,
 GraphQLString,
 GraphQLInt
} = require('graphql');
const assetType = require('./asset-type');

module.exports = new GraphQLObjectType({
  name: "Cost",
  fields: {
    asset: {type: assetType},
    quantity: {type: GraphQLInt}
  }
})
