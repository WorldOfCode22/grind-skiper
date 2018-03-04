const mongoose = require('mongoose');
const assetModel = require('./asset-model');

const cost = new mongoose.Schema({
  _id: false,
  asset: assetModel.asset,
  quantity: Number
})

module.exports = cost;
