const itemModel = require('../../../models/item-model');
const assetModel = require('../../../models/asset-model');

module.exports.create = function(parentVal, args){
    let costArr = [];
        function getAssets(){
          let assetArr = []
          args.cost.forEach((obj)=>{
            assetArr.push(obj.asset.name)
          })
          return assetArr;
        }
        let assetArr = getAssets().map(
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
            (docs)=>{
                docs.forEach((doc, i)=>{
                  costArr.push({asset:doc, quantity:args.cost[i].quantity});
                  args.cost[i].asset.name = doc.name;
                })
                return docs;
            },
            err=>{throw new Error(err)}
          ).then(
            ()=>{
              return new itemModel({
                cost: args.cost,
                name: args.name,
                description: args.description
              }).save().then(
                (doc)=>{
                  doc.cost = costArr;
                  console.log(doc);
                  return doc;
                },
                err=>{throw new Error(err)}
          )
            },
            err=>{throw new Error(err)}
          )
    }
