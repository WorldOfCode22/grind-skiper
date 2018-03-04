const
{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql')

const assetType = require('../query/asset-type');
const assetResolver = require('./resolvers/asset-resolver');
const itemType = require('../query/item-type');
const itemResolver = require('./resolvers/item-resolver');
const costType = require('../query/cost-type');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createAsset: {
      type: assetType,
      args: {
        name: {type: GraphQLString},
        description: {type: GraphQLString}
      },
      resolve(parentVal,args){
        return assetResolver.create(parentVal, args)
      },
    },
    createItem: {
      type: itemType,
      args: {
        cost: {type: GraphQLList(costType.inputType)},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
      },
      resolve(parentVal, args){
        return itemResolver.create(parentVal, args)
      }
    }
  }
})
