const mongoose = require('mongoose');
const assetModel = require('../../../models/asset-model');

module.exports.create = function(parentVal, args){
  if(Object.keys(args).length > 0){
  return new assetModel({
    name: args.name,
    description: args.description
  }).save().then(
    (doc)=>{return doc},
    err=>{throw new Error(err)}
  )}else{
    throw new Error("Args Can Not Be Empty");
  }
}
