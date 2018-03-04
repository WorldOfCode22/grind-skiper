const assetType = require('../asset-type');
const assetResolver = require('./resolvers/asset-resolver');
const costType = require('../cost-type');
const costResolver = require('./resolvers/cost-resolver');
const itemType = require('../item-type');
const itemResolver = require('./resolvers/item-resolver')
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
    },
    item: {
      type: itemType,
      args: {
        id: {type: GraphQLString},
        name: {type: GraphQLString}
      },
      resolver(parentVal, args){
        itemResolver(parentVal, args);
      }
    }
  }
})
