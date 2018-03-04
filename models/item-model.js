const mongoose = require('mongoose');
const assetModel = require('./asset-model');
const costModel = require('./cost-model')
const item = new mongoose.Schema({
  cost: [costModel],
  name: {
    type: String,
    required: true,
    unique: true
  },
  description:{
      type: String,
      required: true
  }
})

module.exports = mongoose.model('item', item)
