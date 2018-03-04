const
{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql')

const assetType = require('../query/asset-type');
const assetResolver = require('./resolvers/asset-resolver');

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
  }
})
