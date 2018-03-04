const
{GraphQLObjectType,
 GraphQLString,
 GraphQLInt,
 GraphQLInputObjectType,
 GraphQLNonNull
} = require('graphql');
const assetType = require('./asset-type');

module.exports = new GraphQLObjectType({
  name: "Cost",
  fields: {
    asset: {type: assetType},
    quantity: {type: GraphQLInt}
  }
})

module.exports.inputType = new GraphQLInputObjectType({
  name: "Cost_Input",
  fields: {
    asset: {type: new GraphQLNonNull(assetType.inputType)},
    quantity: {type: new GraphQLNonNull(GraphQLInt)}
  }
})
