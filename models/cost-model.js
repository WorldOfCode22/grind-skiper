const mongoose = require('mongoose');
const assetModel = require('./asset-model');

const cost = new mongoose.Schema({
  asset: assetModel.asset,
  quantity: Number
})

module.exports = cost;
