const itemModel = require('../../../../models/item-model');
const assetModel = require('../../../../models/asset-model');
module.exports = function(parentVal, args){
  costArr = [];
  return itemModel.findOne({name:args.name})
    .then(
      (itemDoc)=>{
        function getAssetNames(){
          let namesArr = []
          itemDoc.cost.forEach((cost, i)=>{
            namesArr.push(cost.asset.name);
          })
          return namesArr;
        }
        let assetArr = getAssetNames().map(
          name=>{
            return assetModel.findOne({name: name})
              .then(
                (doc)=>{return doc},
                err=>{throw new Error(err)}
              )
          }
        )
        return Promise.all(assetArr)
          .then(
            (assetDocs)=>{
              assetDocs.forEach(
                (doc, i)=>{
                  itemDoc.cost[i].asset = doc;
                }
              )
              return itemDoc;
            },
            err=>{console.log(err)}
          )
      },
      err=>{throw new Error(err)}
    )
}
