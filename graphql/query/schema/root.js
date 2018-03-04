const assetType = require('../asset-type');
const assetResolver = require('./resolvers/asset-resolver');
const
{
  GraphQLObjectType,
  GraphQLString
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
    }
  }
})
