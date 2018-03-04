const assetType = require('../asset-type');
const assetResolver = require('./resolvers/asset-resolver');
const costType = require('../cost-type');
const costResolver = require('./resolvers/cost-resolver');
const
{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');
module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    asset: {
      type: assetType,
      args: {
        id: {type: GraphQLString},
        name: {type: GraphQLString}
      },
      resolver(parentVal, args){
        assetResolver(parentVal, args)
      }
    },
    cost: {
      type: costType,
      args: {
        asset: {type: assetType.inputType},
        quantity: {type: GraphQLInt}
      },
      resolver(parentVal, args){
        costResolver(parentVal, args);
      }
    }
  }
})
