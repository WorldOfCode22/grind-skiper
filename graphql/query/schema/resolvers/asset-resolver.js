const assetModel = require('../../../../models/asset-model');
module.exports = function(parentVal, args){
  return assetModel.findOne({name: args.name})
    .then(
      (doc)=>{return doc},
      err=>{throw new Error(err)}
    )
}
